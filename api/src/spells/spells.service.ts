import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { Types } from 'mongoose';
import * as mongoose from 'mongoose';
import { Spell } from './schemas/spells.schemas';
import { InjectModel } from '@nestjs/mongoose';
import { Query } from 'express-serve-static-core';
import { CreateDto } from './dto/create-spells.dto';

@Injectable()
export class SpellsService {
  constructor(
    @InjectModel(Spell.name)
    private spellModel: mongoose.Model<Spell>,
  ) {}

  async findAll(query: Query): Promise<Spell[]> {
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

    const spells = await this.spellModel
      .find({ ...keyword })
      //.limit(resPerPage)
      .skip(skip);
    return spells;
  }
  async create(createDto: CreateDto): Promise<{ message: string, createdSpell: Spell }> {
    const { title, releaseTime, range, duration, description, spellLevel } = createDto;
  
    try {
      const createdSpell= await this.spellModel.create({
        title,
        releaseTime,
        range,
        duration,
        description,
        spellLevel
      });
  
      return { message: 'Spell created successfully', createdSpell};
    } catch (error) {
      throw new Error('Failed to create Spell'); // Personalize a mensagem de erro conforme necessário
    }
  }
  
  async findById(id: Types.ObjectId): Promise<Spell> {
    const isValidId = Types.ObjectId.isValid(id);

    if (!isValidId) {
      throw new BadRequestException('Please enter a valid ID.');
    }

    const spell = await this.spellModel.findById(id);

    if (!spell) {
      throw new NotFoundException('Spell not found.');
    }

    return spell;
  }

  async updateById(id: mongoose.Types.ObjectId, spell: Spell): Promise<{ message: string, updatedSpell: Spell | null }> {
    try {
      const updatedSpell = await this.spellModel.findByIdAndUpdate(id, spell, {
        new: true,
        runValidators: true,
      });
  
      if (!updatedSpell) {
        throw new Error('Spell not found');
      }
  
      return { message: 'Spell updated successfully', updatedSpell };
    } catch (error) {
      throw new Error('Failed to update Spell'); // Personalize a mensagem de erro conforme necessário
    }
  }
  
  async deleteById(id: mongoose.Types.ObjectId): Promise<{ message: string, deletedSpell: Spell | null }> {
    try {
      const deletedSpell = await this.spellModel.findByIdAndDelete(id);
  
      if (!deletedSpell) {
        throw new Error('Spell not found');
      }
  
      return { message: 'Spell deleted successfully', deletedSpell };
    } catch (error) {
      throw new Error('Failed to delete spell'); // Personalize a mensagem de erro conforme necessário
    }
  }
  
}
