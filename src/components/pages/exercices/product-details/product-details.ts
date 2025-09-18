import { Component, Input } from '@angular/core';
import { Product } from '../../../../models/product.model';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails {

@Input() product : Product = {
    id : 0,
    name: "dsklqfsd",
    price: 0,
    description: "dfqsfgqgd",
    quantity: 0,
    imageUrl: "e",
    note : 0
}

}
