import { Module } from '@nestjs/common';
import { AppearanceController } from './appearance.controller';
import { AppearanceService } from './appearance.service';
import { MongooseModule } from '@nestjs/mongoose';
import { AppearanceSchema } from './schemas/appearance.schemas';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          secret: config.get<string>('JWT_SECRET'),
          signOptions: {
            expiresIn: config.get<string | number>('JWT_EXPIRES'),
          },
        };
      },
    }),
    MongooseModule.forFeature([{ name: 'Appearance', schema: AppearanceSchema }]),
  ],
  controllers: [AppearanceController],
  providers: [AppearanceService, JwtStrategy],
  exports: [JwtStrategy, PassportModule],
})
export class AppearanceModule {}
