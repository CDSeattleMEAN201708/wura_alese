import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service'
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-seattle',
  templateUrl: './seattle.component.html',
  styleUrls: ['./seattle.component.css']
})
export class SeattleComponent implements OnInit {
  @Input() mySeattle;
  @Input() myStatus;
  city_name: any
  weather = {
    humidity: 0,
    temp: 0,
    temp_high: 0,
    temp_low: 0,
    name: ''
  }

constructor(private _route: ActivatedRoute, private _httpService: TaskService) { }

  ngOnInit() {
    this._route.paramMap
      .switchMap(params => {
        this.city_name = params.get('city')
        return this._httpService.get_forecast(params.get('city'))
      }).subscribe( data => {
        this.weather.name = data.name
        this.weather.humidity = data.main.humidity
        this.weather.temp = Math.ceil(1.8 * (data.main.temp- 273) + 32)
        this.weather.temp_low = Math.ceil(1.8 * (data.main.temp_min- 273) + 32)
        this.weather.temp_high = Math.ceil(1.8 * (data.main.temp_max - 273) + 32)
      })

  }

}
