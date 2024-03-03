import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { SchedulesService } from './schedules.service';
import { Schedule } from './schemas/schedule.schemas';
import { CreateDto } from './dto/create-schedules.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';
import mongoose from 'mongoose';

@Controller('/schedules')
export class SchedulesController {
  constructor(private readonly schedulesService: SchedulesService) {}
  @Get()
  async getAllSchedules(@Query() query: ExpressQuery): Promise<Schedule[]> {
    return this.schedulesService.findAll(query);
  }

  @Post('/create')
  async create(
    @Body() createDto: CreateDto,
  ): Promise<{ message: string }> {
    return this.schedulesService.create(createDto);
  }

  @Get('/:id')
  async getSchedule(@Param('id') id: mongoose.Types.ObjectId) {
    const schedule = await this.schedulesService.findById(id);
    return schedule;
  }

  @Put('/:id')
  async update(
    @Param('id')
    id: mongoose.Types.ObjectId,
    @Body()
    schedule: UpdateScheduleDto,
  ): Promise<{ message: string }> {
    return this.schedulesService.updateById(id, schedule);
  }


  @Delete('/:id')
  async deleteService(@Param('id') id: mongoose.Types.ObjectId) {
    const schedule = await this.schedulesService.deleteById(id);
    return schedule;
  }
}
