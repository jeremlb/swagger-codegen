import { Controller, Get, Post, Put, Delete, Param, Body, Query } from '@nestjs/common';
import { CatService } from './cat.service';
import { CreateCatDto } from './models/cat.create.dto';
import { ApiParam, ApiCreatedResponse, ApiResponse, ApiNoContentResponse, ApiQuery, ApiTags, ApiOkResponse } from '@nestjs/swagger';
import { UpdateCatDto } from './models/cat.update.dto';
import { CatDto } from './models/cat.dto';

@Controller('/v1/cats')
@ApiTags('cats')
export class AppController {
  constructor(private readonly catService: CatService) {}

  @Get()
  @ApiOkResponse({ type: [CatDto] })
  @ApiQuery({
    name: 'name',
    description: 'search cat by name',
    required: false,
    type: String,
    
  })
  getAll(@Query() name?: string): CatDto[] {
    return this.catService.getAll();
  }

  @Post()
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: CatDto,
  })
  create(@Body() payload: CreateCatDto): CatDto {
    return this.catService.create(payload);
  }

  @Get(':id')
  @ApiOkResponse({ type: CatDto })
  @ApiParam({ name: 'id', type: 'number' })
  getbyId(@Param() id: number): CatDto {
    return this.catService.getById(id);
  }

  @Put(':id')
  @ApiOkResponse({ type: CatDto })
  @ApiParam({ name: 'id', type: 'number' })
  update(@Param() id: number, @Body() payload: UpdateCatDto): CatDto {
    return this.catService.update(id);
  }

  @Delete(':id')
  @ApiNoContentResponse({ description: 'The record has been deleted'})
  @ApiParam({ name: 'id', type: 'number' })
  delete(@Param() id: number) {
    this.catService.delete(id);
  }
}
