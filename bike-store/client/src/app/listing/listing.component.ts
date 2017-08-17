import { Component, OnInit } from '@angular/core';
import { Bike } from '../bike'
import { Router } from '@angular/router'
import { BikeService } from '../bike.service'

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {
  bike = new Bike
  user_bikes = []

  constructor(private service: BikeService, private router: Router) { }

  ngOnInit() {
    this.service.user_bike()
      .then(data => {
        this.user_bikes = data
        console.log(this.user_bikes)
      })
      .catch(error => {
        console.log(error)
      })
  }
  on_submit() {
    this.service.create_bike(this.bike)
      .then(data => {
        this.user_bikes.push(data)
        console.log(data)
        this.bike = new Bike
      })
      .catch(error => console.log(error))
  }
  update(x) {
    this.service.update_bike(this.user_bikes[x])
      .then(data => {
        console.log(data)
      })
      .catch(error => console.log(error))
  }

}
