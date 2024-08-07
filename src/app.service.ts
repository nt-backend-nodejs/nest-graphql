import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
private data:any = {}

async  getHello() {
  if(this.data.todos){
    return this.data.todos
  }  

  
    const response =  await    fetch('https://jsonplaceholder.typicode.com/todos')
    const result = await response.json()

    this.data.todos = result

    return result
  }
  
  
  
}







function a(num:number) {
  return Math.pow((((num+2)*3)/12), 4)
}
