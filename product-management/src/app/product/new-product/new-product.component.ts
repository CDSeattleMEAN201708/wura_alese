import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from '../../product.service'

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  constructor(private _productService: ProductService) { }
  product = {
    name: '',
    price: '',
    id: 0
  }
  ngOnInit() {
  }
  create_product() {
    this._productService.count += 1
    this.product.id = this._productService.count
    console.log(this._productService.count, this.product.id)
    this._productService.products.push(this.product)
    this.product = {
      name: '',
      price: '',
      id: 0
    }
  }



}
