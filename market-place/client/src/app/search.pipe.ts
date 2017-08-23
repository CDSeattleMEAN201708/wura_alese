import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(bikes: Array<any>, keyword: string): any {
    if(!keyword) return bikes
    var new_arr = []
    for(let bike of bikes) {
      if(bike.title.toLowerCase().includes(keyword.toLowerCase())) {
        new_arr.push(bike)
      }
    }
    return new_arr;
  }

}
