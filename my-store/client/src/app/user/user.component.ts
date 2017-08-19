import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { Router } from '@angular/router'
import { BikeService } from '../bike.service'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User
  error: any
  log_user: User
  all_bikes = []
  random_bike = ''
  count: any
  restrict = {
    status: false,
    message: '',
    time: null,
    change: false
  }

  constructor(private service: BikeService, private router: Router) {

   }

  ngOnInit() {
    this.count = 0
    this.user = new User()
    this.error = {}
    this.log_user = new User()
    this.service.random_bike()
      .then(data => {
        this.all_bikes = data.data
        this.random_bike = this.all_bikes[Math.trunc(Math.random() * this.all_bikes.length)]
      })
  }
  sign_up() {
    this.service.create_user(this.user)
      .then(data => {
        if(data.status == false) {
          this.error = data.data
        } else {
          this.router.navigate(['/browse'])
        }
        this.user = new User()
      })
      .catch(error => {
        this.user = new User()
        console.log(error)
      })
  }
  log_in() {
    this.count += 1
    if(this.count == 2) {
      this.restrict.status = true
      this.restrict.message = 'Try again in 5 mins'
      this.restrict.time = new Date()
      setTimeout( () => {
        //1hr ahead - 60*1
        //1 min ahead - 1*1*60
        //1hr and 1 min ahead - 60*1*60
          console.log(new Date(new Date().getTime() + 1*1*180*1000))
          console.log(this.restrict.time)
          this.restrict.status = false 
      }, 10000)
    }
    this.service.validate_user(this.log_user)
      .then(data => {
        if(data.status == false) {
          this.error = data.data
        } else {
          this.router.navigate(['/browse'])
        }
        this.log_user = new User()
      })
      .catch(error => {
        this.log_user = new User()
        console.log(error)
      })
  }



}
