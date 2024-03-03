import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Types } from 'mongoose';
import * as mongoose from 'mongoose';
import { Client } from './schemas/clients.schemas';
import { InjectModel } from '@nestjs/mongoose';
import { Query } from 'express-serve-static-core';
import { CreateDto } from './dto/create-clients.dto';

@Injectable()
export class ClientService {
  constructor(
    @InjectModel(Client.name)
    private clientModel: mongoose.Model<Client>,
  ) {}

  async findAll(query: Query): Promise<Client[]> {
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

    const clients = await this.clientModel
      .find({ ...keyword })
      //.limit(resPerPage)
      .skip(skip);
    return clients;
  }
  async create(createDto: CreateDto): Promise<{ message: string, createdClient: Client }> {
    const { name, email, birthdayDate, gender, phone, children } = createDto;
  
    try {
      const createdClient= await this.clientModel.create({
        name,
        email,
        birthdayDate,
        gender,
        phone,
        children, 

      });
  
      return { message: 'Client created successfully', createdClient};
    } catch (error) {
      throw new Error('Failed to create Client'); // Personalize a mensagem de erro conforme necessário
    }
  }
  
  async findById(id: Types.ObjectId): Promise<Client> {
    const isValidId = Types.ObjectId.isValid(id);

    if (!isValidId) {
      throw new BadRequestException('Please enter a valid ID.');
    }

    const client = await this.clientModel.findById(id);

    if (!client) {
      throw new NotFoundException('Client not found.');
    }

    return client;
  }

  async updateById(id: mongoose.Types.ObjectId, client: Client): Promise<{ message: string, updatedClient: Client | null }> {
    try {
      const updatedClient = await this.clientModel.findByIdAndUpdate(id, client, {
        new: true,
        runValidators: true,
      });
  
      if (!updatedClient) {
        throw new Error('Client not found');
      }
  
      return { message: 'Client updated successfully', updatedClient };
    } catch (error) {
      throw new Error('Failed to update client'); // Personalize a mensagem de erro conforme necessário
    }
  }
  
  async deleteById(id: mongoose.Types.ObjectId): Promise<{ message: string, deletedClient: Client | null }> {
    try {
      const deletedClient = await this.clientModel.findByIdAndDelete(id);
  
      if (!deletedClient) {
        throw new Error('Client not found');
      }
  
      return { message: 'Client deleted successfully', deletedClient };
    } catch (error) {
      throw new Error('Failed to delete client'); // Personalize a mensagem de erro conforme necessário
    }
  }
  
}
