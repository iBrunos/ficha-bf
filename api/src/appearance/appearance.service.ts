import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Types } from 'mongoose';
import * as mongoose from 'mongoose';
import { Appearance } from './schemas/appearance.schemas';
import { InjectModel } from '@nestjs/mongoose';
import { Query } from 'express-serve-static-core';
import { CreateDto } from './dto/create-appearance.dto';

@Injectable()
export class AppearanceService {
  constructor(
    @InjectModel(Appearance.name)
    private appearanceModel: mongoose.Model<Appearance>,
  ) { }

  async findAll(query: Query): Promise<Appearance[]> {
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

    const appearances = await this.appearanceModel
      .find({ ...keyword })
      //.limit(resPerPage)
      .skip(skip);
    return appearances;
  }
  async create(createDto: CreateDto): Promise<{ message: string, createdAppearance: Appearance }> {
    const { botMessageBackgroundColor, clientMessageBackgroundColor, buttonBackgroundColor, buttonHoverColor, 
      backgroundColor, pageTextColor, serviceCardBackgroundColor, employeeCardBackgroundColor, cardsTextColor, 
      text_A_Color, text_B_Color, dateTextColor, timeTextColor, employeeTextColor, serviceTextColor, priceTextColor,
      cancelButtonBackgroundColor, cancelButtonTextColor, cancelButtonHoverColor, cardBackgroundColor} = createDto;

    try {
      const createdAppearance = await this.appearanceModel.create({
        botMessageBackgroundColor,
        clientMessageBackgroundColor,
        buttonBackgroundColor,
        buttonHoverColor,
        backgroundColor,
        pageTextColor,
        serviceCardBackgroundColor,
        employeeCardBackgroundColor,
        cardsTextColor,
        text_A_Color,
        text_B_Color,
        dateTextColor,
        timeTextColor,
        employeeTextColor,
        serviceTextColor,
        priceTextColor,
        cancelButtonTextColor,
        cancelButtonBackgroundColor,
        cancelButtonHoverColor,
        cardBackgroundColor
      });

      return { message: 'Appearance created successfully', createdAppearance };
    } catch (error) {
      throw new Error('Failed to create Appearance'); // Personalize a mensagem de erro conforme necessário
    }
  }

  async findById(id: Types.ObjectId): Promise<Appearance> {
    const isValidId = Types.ObjectId.isValid(id);

    if (!isValidId) {
      throw new BadRequestException('Please enter a valid ID.');
    }

    const appearance = await this.appearanceModel.findById(id);

    if (!appearance) {
      throw new NotFoundException('Appearance not found.');
    }

    return appearance;
  }

  async updateById(id: mongoose.Types.ObjectId, appearance: Appearance): Promise<{ message: string, updatedAppearance: Appearance | null }> {
    try {
      const updatedAppearance = await this.appearanceModel.findByIdAndUpdate(id, appearance, {
        new: true,
        runValidators: true,
      });

      if (!updatedAppearance) {
        throw new Error('Appearance not found');
      }

      return { message: 'Appearance updated successfully', updatedAppearance };
    } catch (error) {
      throw new Error('Failed to update appearance'); // Personalize a mensagem de erro conforme necessário
    }
  }

  async deleteById(id: mongoose.Types.ObjectId): Promise<{ message: string, deletedAppearance: Appearance | null }> {
    try {
      const deletedAppearance = await this.appearanceModel.findByIdAndDelete(id);

      if (!deletedAppearance) {
        throw new Error('Appearance not found');
      }

      return { message: 'appearance deleted successfully', deletedAppearance };
    } catch (error) {
      throw new Error('Failed to delete appearance'); // Personalize a mensagem de erro conforme necessário
    }
  }
}