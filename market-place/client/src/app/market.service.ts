import { Injectable } from '@angular/core';
import 'rxjs'
import { User } from './user'
import { Http } from '@angular/http'
import { Bike } from './bike'

@Injectable()
export class MarketService {

  constructor(private _http: Http) { }

  create_user(user: User) {
    return this._http.post('/sign_up', user)
      .map(data => data.json())
      .toPromise()
  }
  validate_user(user: User) {
    return this._http.post('/log_in', user)
      .map(data => data.json())
      .toPromise()
  }
  create_bike(bike: Bike) {
    return this._http.post('/create_bike', bike)
      .map(data => data.json())
      .toPromise()
  }
  current_user() {
    return this._http.get('/current_user')
      .map(data => data.json())
      .toPromise()
  }
  user_bikes() {
    return this._http.get('/user_bikes')
      .map(data => data.json())
      .toPromise()
  }
  all_bikes() {
    return this._http.get('/all_bikes')
      .map(data => data.json())
      .toPromise()
  }
  delete_bike(id) {
    return this._http.get(`/delete_bike/${id}`)
      .map(data => data.json())
      .toPromise()
  }
  update_bike(id, bike: Bike) {
    return this._http.post(`/update_bike/${id}`, bike)
      .map(data => data.json())
      .toPromise()
  }

}
