import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Types } from 'mongoose';
import * as mongoose from 'mongoose';
import { Schedule } from './schemas/schedule.schemas';
import { InjectModel } from '@nestjs/mongoose';
import { Query } from 'express-serve-static-core';
import { CreateDto } from './dto/create-schedules.dto';

@Injectable()
export class SchedulesService {
  constructor(
    @InjectModel(Schedule.name)
    private scheduleModel: mongoose.Model<Schedule>,
  ) {}

  async findAll(query: Query): Promise<Schedule[]> {
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

    const schedules = await this.scheduleModel
      .find({ ...keyword })
      //.limit(resPerPage)
      .skip(skip);
    return schedules;
  }
  async create(createDto: CreateDto): Promise<{ message: string, createdSchedule: Schedule }> {
    const { dateAndTime,nameClient, nameEmployee, email, phone, service, time, serviceDuration, price,active } = createDto;
  
    try {
      const createdSchedule = await this.scheduleModel.create({
        dateAndTime,
        nameClient,
        nameEmployee,
        email,
        phone,
        service, 
        price,
        time,
        serviceDuration,
        active
      });
  
      return { message: 'Schedule created successfully', createdSchedule };
    } catch (error) {
      throw new Error('Failed to create Schedule'); // Personalize a mensagem de erro conforme necessário
    }
  }
  
  async findById(id: Types.ObjectId): Promise<Schedule> {
    const isValidId = Types.ObjectId.isValid(id);

    if (!isValidId) {
      throw new BadRequestException('Please enter a valid ID.');
    }

    const schedule = await this.scheduleModel.findById(id);

    if (!schedule) {
      throw new NotFoundException('Schedule not found.');
    }

    return schedule;
  }

  async updateById(id: mongoose.Types.ObjectId, schedule: Schedule): Promise<{ message: string, updatedSchedule: Schedule | null }> {
    try {
      const updatedSchedule = await this.scheduleModel.findByIdAndUpdate(id, schedule, {
        new: true,
        runValidators: true,
      });
  
      if (!updatedSchedule) {
        throw new Error('Schedule not found');
      }
  
      return { message: 'Schedule updated successfully', updatedSchedule };
    } catch (error) {
      throw new Error('Failed to update Schedule'); // Personalize a mensagem de erro conforme necessário
    }
  }
  
  async deleteById(id: mongoose.Types.ObjectId): Promise<{ message: string, deletedSchedule: Schedule | null }> {
    try {
      const deletedSchedule = await this.scheduleModel.findByIdAndDelete(id);
  
      if (!deletedSchedule) {
        throw new Error('Schedule not found');
      }
  
      return { message: 'Schedule deleted successfully', deletedSchedule };
    } catch (error) {
      throw new Error('Failed to delete schedule'); // Personalize a mensagem de erro conforme necessário
    }
  }
  
}
