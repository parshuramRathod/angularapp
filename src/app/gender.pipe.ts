import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {
  value1='Mr.';
  value2='Mrs.';
  transform(value: string, gender: string):string {
    if(gender=='Male'){
      return this.value1+value;
    }else{
      return  this.value2+value;
    }
    


    }

}
