import {
  Body,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { PrincipalService } from './principal-service';

export class ApiController<Entity> {
  constructor(
    private readonly _principalService: PrincipalService<Entity>,
  ) {
  }

  @Post()
  createOne(
    @Body() newRecord: Entity,
  ) {
    return newRecord;
  }

  @Put(':id')
  updateOne(
    @Body() record: Entity,
    @Param('id') id: number,
  ): any {
    return id;
  }

  @Delete(':id')
  deleteOne(
    @Param('id') id: number,
  ): number {
    return id;
  }

  @Get(':id')
  findOneById(
    @Param('id') id: number,
  ): number {
    return id;
  }

  @Get()
  async findAll(
    @Query() searchCriteria,
  ) {
    return searchCriteria;
  }
}

