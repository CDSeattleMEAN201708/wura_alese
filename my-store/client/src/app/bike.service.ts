import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs'
import { User } from './user'
import { Bike } from './bike'

@Injectable()
export class BikeService {
  constructor(private http: Http) { }

  create_user(user: User) {
    return this.http.post('/create_user', user)
      .map(data => data.json())
      .toPromise()
  }
  validate_user(user: User) {
    return this.http.post('/validate_user', user)
    .map(data => data.json())
    .toPromise()
  }
  log_out() {
    this.http.get('/log_out')
  }
  create_bike(bike: Bike){
    return this.http.post('/create_bike', bike)
      .map(data => data.json())
      .toPromise()
  }
  user_bikes() {
    return this.http.get('/user_bikes')
    .map(data => data.json())
    .toPromise()
  }
  update_bike(bike, id) {
    return this.http.post(`/update_bike/${id}`, bike)
      .map(data => data.json())
      .toPromise()
  }
  delete_bike(id) {
    return this.http.get(`/delete_bike/${id}`)
    .map(data => data.json())
    .toPromise()
  }
  all_bikes() {
    return this.http.get('/all_bikes')
    .map(data => data.json())
    .toPromise()
  }
  current_user() {
    return this.http.get('/current_user')
    .map(data => data.json())
    .toPromise()
  }
  random_bike() {
    return this.http.get('/random_bike')
    .map(data => data.json())
    .toPromise()
  }
}
