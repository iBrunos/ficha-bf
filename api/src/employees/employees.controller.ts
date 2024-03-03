import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
  UnauthorizedException
} from '@nestjs/common';
import { EmployeeService } from './employees.service';
import { Employee } from './schemas/employee.schemas';
import { CreateDto } from './dto/create-employees.dto';
import { UpdateEmployeesDto } from './dto/update-employees.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';
import * as jwt from 'jsonwebtoken';
import mongoose from 'mongoose';


@Controller('/employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeeService) {}

  @Get()
  async getAllServices(@Query() query: ExpressQuery): Promise<Employee[]> {
    return this.employeesService.findAll(query);
  }

  @Post('/create')
  async create(@Body() createDto: CreateDto): Promise<{ message: string }> {

    // Agora, crie o funcionário
    return this.employeesService.create(createDto);
  }
  @Post('/login')
  async login(@Body() loginDto: { username: string; password: string }): Promise<any> {
    try {

      const employee = await this.employeesService.validateEmployee(loginDto.username, loginDto.password);
   
      if (!employee) {
        throw new UnauthorizedException('Invalid credentials');
      }

      const token = this.generateJwtToken(employee);

      return { message: 'Login successful', token , employee};
    } catch (error) {
      throw new UnauthorizedException('Invalid credentials');
    }
  }

  private generateJwtToken(employee: any): string {
    const payload = { username: employee.username, sub: employee.id };
    const secretKey = 'yourSecretKey'; // Substitua pelo sua chave secreta

    const token = jwt.sign(payload, secretKey, { expiresIn: '1h' }); // Defina a expiração como desejado

    return token;
  }
  @Get('/:id')
  async getEmployees(@Param('id') id: mongoose.Types.ObjectId) {
    const employee = await this.employeesService.findById(id);
    return employee;
  }

  @Put('/:id')
  async updateEmployees(
    @Param('id') id: mongoose.Types.ObjectId,
    @Body() employee: UpdateEmployeesDto,
  ): Promise<{ message: string }> {
    // Se a senha estiver presente, hash antes de atualizar
    if (employee.password) {
      employee.password = await this.employeesService.hashPassword(employee.password);
    }

    return this.employeesService.updateById(id, employee);
  }

  @Patch('/:id') 
  async patchEmployee(
    @Param('id') id: mongoose.Types.ObjectId,
    @Body() partialEmployee: Partial<UpdateEmployeesDto>,
  ): Promise<{ message: string }> {
    // Se a senha estiver presente, hash antes de atualizar
    if (partialEmployee.password) {
      partialEmployee.password = await this.employeesService.hashPassword(partialEmployee.password);
    }

    return this.employeesService.patchById(id, partialEmployee);
  }

  @Delete('/:id')
  async deleteEmployees(@Param('id') id: mongoose.Types.ObjectId) {
    const employee = await this.employeesService.deleteById(id);
    return employee;
  }
}