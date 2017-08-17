import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service'
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  id: any
  status = false
  constructor(private _route: ActivatedRoute, private _productService: ProductService) { }

  ngOnInit() {
    if(this.status == true) {
      this._route.paramMap
      .switchMap(params => {
        this.id = params.get('id')
        console.log('********')
        this._productService.products.splice(this.id, 1)
        return this._productService.products
      }).subscribe( data => {

      })
    }
  }
  confirm_this() {
    confirm("Are you sure you want to do that?")
  }

}
