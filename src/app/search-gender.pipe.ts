import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchGender'
})
export class SearchGenderPipe implements PipeTransform {

  transform(val: any, searchTearm:any): any {
    return val.filter(function(search) {
      return search.gender.toLowerCase().indexOf(searchTearm.toLowerCase()) > -1
    });
  }

}
