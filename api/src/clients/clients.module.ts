import { Module } from '@nestjs/common';
import { ClientsController } from './clients.controller';
import { ClientService } from './clients.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ClientsSchema } from './schemas/clients.schemas';
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
    MongooseModule.forFeature([{ name: 'Client', schema: ClientsSchema }]),
  ],
  controllers: [ClientsController],
  providers: [ClientService, JwtStrategy],
  exports: [JwtStrategy, PassportModule],
})
export class ClientModule {}
