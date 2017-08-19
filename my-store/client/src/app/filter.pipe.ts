import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(bike_list: Array<any>, search_word: string): any {
    if(!search_word) return bike_list

    let result = []
    search_word = search_word.toLowerCase()
    for(let bike of bike_list) {
      if(bike.title.toLowerCase().includes(search_word) || bike.description.toLowerCase().includes(search_word)){
        result.push(bike)
      }
    }
  
    return result;
  }

}
