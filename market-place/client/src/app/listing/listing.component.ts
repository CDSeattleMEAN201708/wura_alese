import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { MarketService } from '../market.service'
import { Bike } from '../bike'

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  bike: Bike
  bikes = []
  status = false
  update_bike: Bike
  constructor(private _service: MarketService, private _router: Router) { }

  ngOnInit() {
    this.bike = new Bike
    this.update_bike = new Bike
    this._service.current_user()
      .then(data => {
        if(!data.status) {
          this._router.navigate(['/'])
        }
      })
    this._service.user_bikes()
        .then(data => {
          if(data.status) {
            for(let bike of data.data._bikes) {
              this.bikes.push(bike)
            }
          }
        })
  }
  post_data() {
    this._service.create_bike(this.bike)
      .then(data => {
        if(data.status) {
          this.bikes.push(data.data)
        }
        this.bike = new Bike
        this._router.navigate(['/browse'])
      })
      .catch(error => console.log(error, '~~~~~~~~~~~'))
  }
  open_update_form(ind) {
    this.status = true
    this.update_bike = this.bikes[ind]
  }
  update_data(id, ind) {
    this._service.update_bike(id, this.update_bike)
      .then(data => {
        if(data.status) {
          this.status = false
        }
      })
      .catch(error => console.log(error, '~~~~~~~~~~~'))
  }

}
