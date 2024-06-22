import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { addCarDto } from './dto/addCarDto';
import { AnyMxRecord } from 'dns';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('addcar')
  addCar(@Body() addcardto : addCarDto) : any {
    return this.appService.addCar(addcardto);
  }

  @Get('allcars')
  getCars(): any {
    return this.appService.getCars();
  }

  @Put('updatecar/:id') 
  updateCar(@Param('id') carId : string, @Body() updatecar : addCarDto): any  {

    return this.appService.updateCar(carId, updatecar);
  }

  @Delete('delete/:id')
  deleteCar(@Param('id') carId : string): any {
    return this.appService.deleteCar(carId);
  }


}
