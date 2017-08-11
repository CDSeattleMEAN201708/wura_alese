import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  //lets store data in the parent and so we can use it in the child
  notes = [
    {title: 'first note'},
    {title: 'second note'}
  ]
  invoked(event_data){
    console.log('Invoked!!', event_data)
  }
  constructor() { }

  ngOnInit() {
  }

}
