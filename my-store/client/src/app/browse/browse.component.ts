import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { BikeService } from '../bike.service'

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  all_bikes2 = []
  user_id = ''
  user_contact: any
  search = ''
  date: Date
  word = ''

  constructor(private service: BikeService, private router: Router) { }

  ngOnInit() {
    this.user_contact = {
      status: false,
      email: ''
    }
    this.service.all_bikes()
      .then(data => {
        for(let user of data) {
          for(let bike of user.market) {
            this.date = new Date(bike.createdAt)
            this.word += this.date
            this.all_bikes2.push({
              user: user.name, email: user.email, _user: user._id, title: bike.title,
              time: this.word.slice(8, 10) + this.word.slice(11,15) + this.word.slice(16, 18) + this.word.slice(19, 21) + this.word.slice(22, 24),
              description: bike.description, createdAt: new Date(bike.createdAt), _id: bike._id})
            this.word = ''
          }
        }
        this.all_bikes2.sort( (a, b) => { return b.time - a.time })
      })
      .catch(data => console.log(data))
    this.service.current_user()
        .then(data => {
          this.user_id = data
        })
  }

  delete(id, ind) {
    this.service.delete_bike(id)
      .then(data => {
        this.all_bikes2.splice(ind, 1)
      })
      .catch(error => console.log(error))
  }
  show_contact(val) {
    this.user_contact.status = true
    this.user_contact.email = val
  }

}
