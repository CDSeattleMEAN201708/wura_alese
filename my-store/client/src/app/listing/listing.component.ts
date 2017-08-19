import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { BikeService } from '../bike.service'
import { Bike } from '../bike'

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  bike: Bike
  my_bikes = []
  user = ''
  change_bike: Bike

  constructor(private service: BikeService, private router: Router) { }

  ngOnInit() {
    this.bike = new Bike
    this.service.user_bikes()
      .then(data => {
        if(data.status == true) {
          this.user = data.data.name
          this.my_bikes = data.data.market
        }
      })
  }
  log_out_user() {
    this.service.log_out()
    this.router.navigate(['/'])
  }
  post_data() {
    this.service.create_bike(this.bike)
      .then(data => {
        if(data.status == false) {
        } else {
          this.my_bikes.push(data.data)
        }
        this.bike = new Bike
      })
      .catch(error => {
        this.bike = new Bike
      })
  }
  update(id, ind) {
    this.change_bike = this.my_bikes[ind]
    this.my_bikes[ind] = this.change_bike
    this.service.update_bike(this.change_bike, id)
      .then(data => console.log(data))
  }
  delete(id, ind) {
    this.service.delete_bike(id)
      .then(data => {
        this.my_bikes.splice(ind, 1)
      })
      .catch(error => console.log(error))
  }
}
