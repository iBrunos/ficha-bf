import { Module } from '@nestjs/common';
import { SchedulesController } from './schedules.controller';
import { SchedulesService } from './schedules.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SchedulesSchema } from './schemas/schedule.schemas';
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
    MongooseModule.forFeature([{ name: 'Schedule', schema: SchedulesSchema }]),
  ],
  controllers: [SchedulesController],
  providers: [SchedulesService, JwtStrategy],
  exports: [JwtStrategy, PassportModule],
})
export class ScheduleModule {}
