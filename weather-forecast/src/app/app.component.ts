import { Component } from '@angular/core';
import { TaskService } from './task.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Weather Forecast';

  constructor(private _httpService: TaskService) {}

}
