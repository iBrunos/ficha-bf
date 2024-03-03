// employees.module.ts

import { Module } from '@nestjs/common';
import { EmployeesController } from './employees.controller';
import { EmployeeService } from './employees.service';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeesSchema } from './schemas/employee.schemas';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

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
    MongooseModule.forFeature([{ name: 'Employee', schema: EmployeesSchema }]),
  ],
  controllers: [EmployeesController],
  providers: [EmployeeService], // Certifique-se de incluir o EmployeeService como provedor aqui
  exports: [PassportModule],
})
export class EmployeeModule {}
