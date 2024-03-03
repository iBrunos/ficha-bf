import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServiceModule } from './services/services.module';
import { EmployeeModule } from './employees/employees.module';
import { ScheduleModule } from './schedules/schedules.module';
import { SpellsModule } from './spells/spells.module';
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
    EmployeeModule,
    ScheduleModule,
    SpellsModule,
    AppearanceModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
