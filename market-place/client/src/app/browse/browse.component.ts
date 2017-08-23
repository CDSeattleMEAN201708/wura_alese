import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { MarketService } from '../market.service'

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  all_bikes = []
  user_id = ''
  keyword = ''
  constructor(private _service: MarketService, private _router: Router) { }

  ngOnInit() {
    this._service.current_user()
      .then(data => {
        if(data.status) {
          this.user_id = data.data._id
        } else {
          this._router.navigate(['/'])
        }
      })
    this._service.all_bikes()
        .then(data => {
          if(data.status) {
            for(let user of data.data) {
              for(let bike of user._bikes) {
                this.all_bikes.push({title: bike.title, price: bike.price, description: bike.description, bike_id: bike._id, user_id: user._id, user_name: user.name,
                createdAt: new Date(bike.createdAt), calculated_price: '',
                calculated_time: `${new Date(bike.createdAt)}`.slice(8, 10) + `${new Date(bike.createdAt)}`.slice(11,15)
                              + `${new Date(bike.createdAt)}`.slice(16, 18) + `${new Date(bike.createdAt)}`.slice(19, 21)
                              + `${new Date(bike.createdAt)}`.slice(22, 24)})
              }
            }
            this.all_bikes.sort( (a, b) => {return Number(b.calculated_time) - Number(a.calculated_time)})
          }
        })
  }
  confirm_delete(bike_title, bike_id, ind) {
    let result = confirm(`Delete ${bike_title} ?`)
      if(result) {
        this._service.delete_bike(bike_id)
          .then(data => {
            if(data) {
              this.all_bikes.splice(ind, 1)
            }
          })
      }
  }
  view_contact(user_name, bike_title) {
    let result = alert(`Here is the contact:- ${user_name} for ${bike_title}`)
  }

}
