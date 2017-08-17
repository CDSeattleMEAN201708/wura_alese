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
  log_in(user) {
    return this.http.post('/log_in', user)
    .map(data => data.json())
    .toPromise()
  }
  create_bike(bike: Bike) {
    return this.http.post('/create_bike', bike)
      .map(data => data.json())
      .toPromise()
  }
  user_bike() {
    return this.http.get('/user_bike')
      .map(data => data.json())
      .toPromise()
  }
  update_bike(bike) {
    return this.http.post('/create_bike', bike)
      .map(data => data.json())
      .toPromise()
  }

}
