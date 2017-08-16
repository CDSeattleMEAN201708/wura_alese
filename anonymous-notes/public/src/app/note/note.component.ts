import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Note } from '../note'
import { MyServiceService } from '../my-service.service'

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  note = new Note
  all_notes: any = []
  constructor(private my_service: MyServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.my_service.retrieve_notes()
    .then(data => this.all_notes = data)
    .catch(errors => console.log(errors))
  }


  send_data() {
    //use service first if you arent coming from a route but going from passing data to a route
    this.my_service.create(this.note)
    .then( data => this.all_notes.push(data))
    .catch( errors => {console.log(errors)})
    this.note = new Note
  }



}
