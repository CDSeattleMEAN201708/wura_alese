import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise'

@Injectable()
export class ProductService {
  products = []
  count = 0
  constructor() {
  }


}
