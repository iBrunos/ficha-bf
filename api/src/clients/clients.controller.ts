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
import { ClientService } from './clients.service';
import { Client } from './schemas/clients.schemas';
import { CreateDto } from './dto/create-clients.dto';
import { UpdateClientDto } from './dto/update-clients.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';
import mongoose from 'mongoose';

@Controller('/clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientService) {}
  @Get()
  async getAllClients(@Query() query: ExpressQuery): Promise<Client[]> {
    return this.clientsService.findAll(query);
  }

  @Post('/create')
  async create(@Body() createDto: CreateDto): Promise<{ message: string }> {
    return this.clientsService.create(createDto);
  }

  @Get('/:id')
  async getClient(@Param('id') id: mongoose.Types.ObjectId) {
    const client = await this.clientsService.findById(id);
    return client;
  }

  @Put('/:id')
  async updateClient(
    @Param('id')
    id: mongoose.Types.ObjectId,
    @Body()
    client: UpdateClientDto,
  ): Promise<{ message: string }> {
    return this.clientsService.updateById(id, client);
  }

  @Delete('/:id')
  async deleteClient(@Param('id') id: mongoose.Types.ObjectId) {
    const client = await this.clientsService.deleteById(id);
    return client;
  }
}
