import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from '../../product.service'
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  id: any
  product: object

  constructor(private _route: ActivatedRoute, private _productService: ProductService) { }

  ngOnInit() {
    this._route.paramMap
    .switchMap(params => {
      this.id = params.get('id')
      for(var i = 0; i < this._productService.products.length; i++) {
        if(this._productService.products[i].id == this.id) {
          this.product = this._productService.products[i]
        }
      }
      console.log(params.get('id'), '~~~~~~', this._productService.products)
      return this._productService.products
    }).subscribe( data => {
      console.log(data, '*****')
    })
  }

}
