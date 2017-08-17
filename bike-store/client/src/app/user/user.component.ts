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
  user = new User
  errors = []
  log_user = {
    email: '',
    password: ''
  }
  log_in_error: any

  constructor(private service: BikeService, private router: Router) { }

  ngOnInit() {
  }
  post_data() {
    this.service.create_user(this.user)
      .then(data => {
        if(data.status == false) {
          for(let key in data) {
            for(let val in data[key]) {
              this.errors.push(data[key][val].message)
            }
          }
        } else {
          this.router.navigate(['/browse'])
          this.user = new User
        }
      })
      .catch(errors => console.log(errors, '*************'))
  }
  validate_user() {
    this.service.log_in(this.log_user)
      .then(data => {
        if(data.status == false){
            this.log_in_error = data.data
        } else {
          this.router.navigate(['/browse'])
          this.log_user = {
            email: '',
            password: ''
          }
        }
      })
      .catch(errors => console.log(errors, '*************'))
  }

}
