import {
  BadRequestException,
  Injectable,
  NotFoundException,
  UnauthorizedException
} from '@nestjs/common';
import { Types } from 'mongoose';
import * as mongoose from 'mongoose';
import { Employee } from './schemas/employee.schemas';
import { InjectModel } from '@nestjs/mongoose';
import { Query } from 'express-serve-static-core';
import { CreateDto } from './dto/create-employees.dto';
import { PatchDto } from './dto/patch-employees.dto';
import * as bcrypt from 'bcryptjs';


@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(Employee.name)
    private employeeModel: mongoose.Model<Employee>,
  ) { }


  async findAll(query: Query): Promise<Employee[]> {
    const resPerPage = 10;
    const currentPage = Number(query.page) || 1;
    const skip = resPerPage * (currentPage - 1);
    const keyword = query.keyword
      ? {
        name: {
          $regex: query.keyword,
          $options: 'i',
        },
      }
      : {};
    const employees = await this.employeeModel
      .find({ ...keyword })
      //.limit(resPerPage)
      .skip(skip);
    return employees;
  }

  async create(createDto: CreateDto): Promise<{ message: string; createdEmploye: Employee }> {
    const {
      name,
      role,
      services,
      workingDay,
      startTimePause,
      endTimePause,
      timeSlotsMonday,
      timeSlotsTuesday,
      timeSlotsWednesday,
      timeSlotsThursday,
      timeSlotsFriday,
      timeSlotsSaturday,
      timeSlotsSunday,
      password, // Adicionando password aqui
    } = createDto;

    try {
      // Hash da senha antes de salvar no banco de dados
      const hashedPassword = await this.hashPassword(password);

      const createdEmploye = await this.employeeModel.create({
        name,
        role,
        services,
        workingDay,
        startTimePause,
        endTimePause,
        active: true,
        timeSlotsMonday,
        timeSlotsTuesday,
        timeSlotsWednesday,
        timeSlotsThursday,
        timeSlotsFriday,
        timeSlotsSaturday,
        timeSlotsSunday,
        password: hashedPassword, // Incluindo a senha hash no documento
      });

      return { message: 'Employee created successfully', createdEmploye };
    } catch (error) {
      console.error('Failed to create employee:', error);
      throw new Error('Failed to create employee');
    }
  }


  async findById(id: Types.ObjectId): Promise<Employee> {
    const isValidId = Types.ObjectId.isValid(id);
    if (!isValidId) {
      throw new BadRequestException('Please enter a valid ID.');
    }
    const employe = await this.employeeModel.findById(id);
    if (!employe) {
      throw new NotFoundException('Employe not found.');
    }
    return employe;
  }

  async updateById(id: mongoose.Types.ObjectId, employe: Employee): Promise<{ message: string, updatedEmploye: Employee | null }> {
    try {
      const updatedEmploye = await this.employeeModel.findByIdAndUpdate(id, employe, {
        new: true,
        runValidators: true,
      });
      if (!updatedEmploye) {
        throw new Error('Employe not found');
      }
      return { message: 'Employe updated successfully', updatedEmploye };
    } catch (error) {
      throw new Error('Failed to update employe'); // Personalize a mensagem de erro conforme necessário
    }
  }

  async deleteById(id: mongoose.Types.ObjectId): Promise<{ message: string, deletedEmploye: Employee | null }> {
    try {
      const deletedEmploye = await this.employeeModel.findByIdAndDelete(id);
      if (!deletedEmploye) {
        throw new Error('Employe not found');
      }
      return { message: 'Employe deleted successfully', deletedEmploye };
    } catch (error) {
      throw new Error('Failed to delete employe'); // Personalize a mensagem de erro conforme necessário
    }
  }

  async patchById(id: mongoose.Types.ObjectId, partialEmployee: Partial<PatchDto>): Promise<{ message: string }> {
    try {
      const result = await this.employeeModel.findByIdAndUpdate(
        id,
        { $set: partialEmployee },
        { new: true },
      );

      if (result) {
        return { message: 'Atualização parcial bem-sucedida' };
      } else {
        return { message: 'Funcionário não encontrado' };
      }
    } catch (error) {
      throw new Error(`Erro na atualização parcial: ${error.message}`);
    }
  }
  async hashPassword(password: string): Promise<string> {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      console.log("hashedPassword: ",hashedPassword)
      return hashedPassword;
    } catch (error) {
      console.error('Erro ao gerar hash de senha:', error);
      throw error; // Rejeita o erro para ser tratado por quem chamou esta função
    }
  }
  async findByUsername(username: string): Promise<Employee | null> {
    try {
      const employee = await this.employeeModel.findOne({ name: username });
      return employee;
    } catch (error) {
      console.error('Failed to find employee by username:', error);
      throw new Error('Failed to find employee by username');
    }
  }

  async validateEmployee(username: string, password: string): Promise<any> {
    try {
      const employee = await this.findByUsername(username);

      if (!employee) {
        console.log("Usuário não encontrado");
        throw new UnauthorizedException('Invalid credentials');
      }

      const isPasswordValid = await bcrypt.compare(password, employee.password);

      if (isPasswordValid) {
        const { password, ...result } = employee;
        return result;
      } else {
        console.log('Senha incorreta');
        throw new UnauthorizedException('Invalid credentials');
      }
    } catch (error) {
      console.error("Erro na função validateEmployee:", error);
      throw error;
    }
  }


}