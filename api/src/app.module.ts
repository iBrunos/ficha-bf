import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServiceModule } from './services/services.module';
import { EmployeeModule } from './employees/employees.module';
import { ScheduleModule } from './schedules/schedules.module';
import { ClientModule } from './clients/clients.module';
import { AppearanceModule } from './appearance/appearance.module';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DB_URI),
    ServiceModule,
    EmployeeModule, // Mova o EmployeeModule para cima
    ScheduleModule,
    ClientModule,
    AppearanceModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
