import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//

@Component({
  selector: 'app-note-list',
  templateUrl: './note-list.component.html',
  styleUrls: ['./note-list.component.css']
})
export class NoteListComponent implements OnInit {
  @Input() myNotes; //this means Im expecting a binding property called myNotes from the parent
  @Output() myEvent = new EventEmitter() //so myEvent is an EventEmitter

  callParent() { //this is what will happen when we click on the button that calls this function
    this.myEvent.emit(7) //this is going to call the event in myEvent which is in the parent
                          //my event in the parent is calling a function called invoked
                          //we could also send data 7 
  }
  constructor() { }

  ngOnInit() {
  }

}
