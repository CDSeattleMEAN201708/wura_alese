import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs'
import { Note } from './note'

@Injectable()
export class MyServiceService {

  constructor(private http: Http) {}

  create(note: Note) {
    console.log(note, 'Im in the service')
    //below: go to the route create_note and carry along with you the params note
    return this.http.post('/create_note', note)
    .map(data => data.json() ) //convert data returned back into a json object
    .toPromise() //change it to a promise
  }
  retrieve_notes(){
    return this.http.get('/all_notes')
    .map(data => data.json())
    .toPromise()
  }

}
