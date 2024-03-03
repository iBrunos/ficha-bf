import {
    BadRequestException,
    Injectable,
    NotFoundException,
  } from '@nestjs/common';
  import { Types } from 'mongoose';
  import * as mongoose from 'mongoose';
  import { Service } from './schemas/service.schemas';
  import { InjectModel } from '@nestjs/mongoose';
  import { Query } from 'express-serve-static-core';
  import { CreateDto } from './dto/create-service.dto';
  
  @Injectable()
  export class ServicesService {
    constructor(
      @InjectModel(Service.name)
      private serviceModel: mongoose.Model<Service>,
    ) {}
  
    async findAll(query: Query): Promise<Service[]> {
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
  
      const services = await this.serviceModel
        .find({ ...keyword })
        //.limit(resPerPage)
        .skip(skip);
      return services;
    }
    async create(createDto: CreateDto): Promise<{ message: string, createdService: Service }> {
      const { name, price, time } = createDto;
    
      try {
        const createdService = await this.serviceModel.create({
          name,
          price,
          time,
        });
    
        return { message: 'Service created successfully', createdService };
      } catch (error) {
        throw new Error('Failed to create service'); // Personalize a mensagem de erro conforme necessário
      }
    }
    
    async findById(id: Types.ObjectId): Promise<Service> {
      const isValidId = Types.ObjectId.isValid(id);
  
      if (!isValidId) {
        throw new BadRequestException('Please enter a valid ID.');
      }
  
      const service = await this.serviceModel.findById(id);
  
      if (!service) {
        throw new NotFoundException('Service not found.');
      }
  
      return service;
    }
  
    async updateById(id: mongoose.Types.ObjectId, service: Service): Promise<{ message: string, updatedService: Service | null }> {
      try {
        const updatedService = await this.serviceModel.findByIdAndUpdate(id, service, {
          new: true,
          runValidators: true,
        });
    
        if (!updatedService) {
          throw new Error('Service not found');
        }
    
        return { message: 'Service updated successfully', updatedService };
      } catch (error) {
        throw new Error('Failed to update service'); // Personalize a mensagem de erro conforme necessário
      }
    }
    
    async deleteById(id: mongoose.Types.ObjectId): Promise<{ message: string, deletedService: Service | null }> {
      try {
        const deletedService = await this.serviceModel.findByIdAndDelete(id);
    
        if (!deletedService) {
          throw new Error('Service not found');
        }
    
        return { message: 'Service deleted successfully', deletedService };
      } catch (error) {
        throw new Error('Failed to delete service'); // Personalize a mensagem de erro conforme necessário
      }
    }
    
  }
  