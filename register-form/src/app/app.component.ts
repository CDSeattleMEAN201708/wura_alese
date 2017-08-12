import { Component } from '@angular/core';
import { User } from './user'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  password_confirm = ''
  user = new User()
  status = false
  on_submit() {
    this.status = true 
  }
}
