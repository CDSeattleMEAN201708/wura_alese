import { Component, OnInit } from '@angular/core';
import { User } from '../user'
import { Router, ActivatedRoute } from '@angular/router'
import { MarketService } from '../market.service'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  user: User
  log_user: User
  error = ''
  constructor(private _service: MarketService, private _router: Router) { }

  ngOnInit() {
    this.user = new User
    this.log_user = new User
  }
  sign_up() {
    this._service.create_user(this.user)
      .then(data => {
        if(data.status) {
          this.user = new User
          this._router.navigate(['/browse'])
        }
        this.error = data.data
        this.user = new User
      })
      .catch(error => console.log(error, '~~~~~~~~~~~~~~~~~~~~'))
  }
  log_in() {
    this._service.validate_user(this.log_user)
      .then(data => {
        if(data.status) {
          this.log_user = new User
          this._router.navigate(['/browse'])
        }
        this.log_user = new User
        this.error = data.data
      })
      .catch(error => console.log(error, '~~~~~~~~~~~~~~~~~~~~'))
  }


}
