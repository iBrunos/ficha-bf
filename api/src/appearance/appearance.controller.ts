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
import { AppearanceService } from './appearance.service';
import { Appearance } from './schemas/appearance.schemas';
import { CreateDto } from './dto/create-appearance.dto';
import { UpdateAppearanceDto } from './dto/update-appearance.dto';
import { Query as ExpressQuery } from 'express-serve-static-core';
import mongoose from 'mongoose';

@Controller('/appearance')
export class AppearanceController {
  constructor(private readonly appearancesService: AppearanceService) {}
  @Get()
  async getAllAppearance(@Query() query: ExpressQuery): Promise<Appearance[]> {
    return this.appearancesService.findAll(query);
  }

  @Post('/create')
  async create(@Body() createDto: CreateDto): Promise<{ message: string }> {
    return this.appearancesService.create(createDto);
  }

  @Get('/:id')
  async getAppearance(@Param('id') id: mongoose.Types.ObjectId) {
    const appearance = await this.appearancesService.findById(id);
    return appearance;
  }

  @Put('/:id')
  async updateAppearance(
    @Param('id')
    id: mongoose.Types.ObjectId,
    @Body()
    appearance: UpdateAppearanceDto,
  ): Promise<{ message: string }> {
    return this.appearancesService.updateById(id, appearance);
  }

  @Delete('/:id')
  async deleteAppearance(@Param('id') id: mongoose.Types.ObjectId) {
    const appearance = await this.appearancesService.deleteById(id);
    return appearance;
  }
}