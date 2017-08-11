//this is a way for angular to know which component to be aware of an load
  //this is so that angualar can be aware of every component selector being used in our templates so it knows to load it
//if we delete a component we must take it out from this list
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { TaskComponent } from './task/task.component';
import { NoteComponent } from './note/note.component';
import { NoteListComponent } from './note/note-list/note-list.component';

@NgModule({
  declarations: [ //make sure all components are registered here
    AppComponent,
    MyComponentComponent,
    TaskComponent,
    NoteComponent,
    NoteListComponent
  ],
  imports: [ //make sure all modules imported are registered here
    BrowserModule
  ],
  //we must manually register all of our service created 
  providers: [], //service exists here
  bootstrap: [AppComponent]
})
export class AppModule { }
