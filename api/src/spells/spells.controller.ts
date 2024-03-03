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
import { SpellsService } from './spells.service';
import { Spell } from './schemas/spells.schemas';
import { CreateDto } from './dto/create-spells.dto';
import { UpdateSpellDto } from './dto/update-spells.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';
import mongoose from 'mongoose';

@Controller('/spells')
export class SpellsController {
  constructor(private readonly spellsService: SpellsService) {}
  @Get()
  async getAllSpells(@Query() query: ExpressQuery): Promise<Spell[]> {
    return this.spellsService.findAll(query);
  }

  @Post('/create')
  async create(@Body() createDto: CreateDto): Promise<{ message: string }> {
    return this.spellsService.create(createDto);
  }

  @Get('/:id')
  async getSpell(@Param('id') id: mongoose.Types.ObjectId) {
    const spell = await this.spellsService.findById(id);
    return spell;
  }

  @Put('/:id')
  async updateSpell(
    @Param('id')
    id: mongoose.Types.ObjectId,
    @Body()
    spell: UpdateSpellDto,
  ): Promise<{ message: string }> {
    return this.spellsService.updateById(id, spell);
  }

  @Delete('/:id')
  async deleteSpell(@Param('id') id: mongoose.Types.ObjectId) {
    const spell = await this.spellsService.deleteById(id);
    return spell;
  }
}
