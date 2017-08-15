import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class TaskService {

  constructor(private _http: Http) { }

  get_forecast(city) {
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + `,usa&&appid=9db3660914270cd0d018609f0112a9eb`)
                    .map( data => data.json()).toPromise()

  }

}
