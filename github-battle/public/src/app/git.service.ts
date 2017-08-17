import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import 'rxjs'
import { Git } from './git'

@Injectable()
export class GitService {

  constructor(private http: Http) { }

  retrieve_git(user) {
    return this.http.get('https://api.github.com/users/' + user)
    .map(data => data.json())
    .toPromise()
  }
  create_user(user) {
    return this.http.post('/create_user', user)
    .map(data => data.json())
    .toPromise()
  }
  all_users() {
    return this.http.get('/all_users')
    .map(data => data.json())
    .toPromise()
  }
}
