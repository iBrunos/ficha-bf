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
  import { ServicesService } from './services.service';
  import { Service } from './schemas/service.schemas';
  import { CreateDto } from './dto/create-service.dto';
  import { UpdateServiceDto } from './dto/update-services.dto';
  import { Query as ExpressQuery } from 'express-serve-static-core';
  import mongoose from 'mongoose';
  
  @Controller('/services')
  export class ServicesController {
    constructor(private readonly servicesService: ServicesService) {}
    @Get()
    async getAllServices(@Query() query: ExpressQuery): Promise<Service[]> {
      return this.servicesService.findAll(query);
    }
  
    @Post('/create')
    async create(
      @Body() createDto: CreateDto,
    ): Promise<{ message: string }> {
      return this.servicesService.create(createDto);
    }
  
    @Get('/:id')
    async getService(@Param('id') id: mongoose.Types.ObjectId) {
      const service = await this.servicesService.findById(id);
      return service;
    }
  
    @Put('/:id')
    async updateService(
      @Param('id')
      id: mongoose.Types.ObjectId,
      @Body()
      service: UpdateServiceDto,
    ): Promise<{message: string}> {
      return this.servicesService.updateById(id, service);
    }
  
    @Delete('/:id')
    async deleteService(@Param('id') id: mongoose.Types.ObjectId) {
      const service = await this.servicesService.deleteById(id);
      return service;
    }
  }
  