//to use input import first
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  //say we want this component to retirive data from its parent, we use input
  @Input() myEmails; 
  constructor() { }

  ngOnInit() {
  }

}
