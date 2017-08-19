import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(notes: Array<any>, args?: any): any {
    for(let note of notes) {
      note.time = new Date(note.createdAt).getFullYear() + new Date(note.createdAt).getMonth() + new Date(note.createdAt).getDate() + new Date(note.createdAt).getTime()
    }
    notes.sort( (a, b) => {return b.time - a.time})
    return notes;
  }

}
