import { Component } from '@angular/core';
import { HttpServiceService } from './http-service.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Github Score';
  username = ''
  user: string
  score: number
  status: any
  message: string
  constructor(private _httpService: HttpServiceService){}

  get_user() {
    this._httpService.retrieve_git(this.username)
    .then( user => {
      this.status = true
      this.user = user.name
      this.score = user.public_repos + user.followers
      if(this.score < 20) {
        this.message = 'Needs work buddy'
      } else if(this.score > 20 && this.score < 50) {
        this.message = 'A decent start'
      } else if (this.score > 50 && this.score < 100){
        this.message = 'You go girl, on your way there honey!'
      } else if(this.score > 100 && this.score < 200) {
        this.message = 'Great job superstar'
      }
    })
    .catch( errors => {
      this.status = false
    })
  }
}
