import { Injectable } from '@nestjs/common';
import { addCarDto } from './dto/addCarDto';
import { title } from 'process';
//import { v4 as uuid4 } from 'uuid';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AppService {

 cars : any= [];

  getHello(): string {
    return 'Hello World!';
  }


  addCar ( addcardto : addCarDto): any {
    
    const newCar = {
      id : uuidv4(),
      title : addcardto.title,
      description :  addcardto.description
    }
    console.log(newCar);

  this.cars.push(newCar);
  return {res : 'Cew car Added ', status: 200}
  } 

  getCars() : any  {
    return (this.cars);
  }

  updateCar( idcar :string, updatecar : addCarDto) : any {
    let Obj = this.cars.find(thecar => thecar.id == idcar);

    console.log('obj', Obj)
let newcar = {
  id : idcar,
  title : updatecar.title,
  description : updatecar.description
}

console.log('new car' , newcar);
let newtab = this.cars.filter(item => item.id !== idcar);

this.cars = newtab ; 
console.log('newtab' , newtab);
this.cars.push(newcar);

return{res : 'Car updated', status: 200 }
}

deleteCar(idcar : string) : any {
  let Obj = this.cars.find(thecar => thecar.id == idcar);
  let newtab = this.cars.filter(item => item.id !== idcar);
  this.cars = newtab;
  return {res : 'Car deleted ', status: 200 }
}

}
