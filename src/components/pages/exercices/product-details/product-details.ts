import { Component } from '@angular/core';
import { Product } from '../../../../models/product.model';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails {

product : Product  = {
  id: 1,
  name: "Ordinateur portable",
  price: 799.99,
  description: "Un ordinateur portable puissant et léger.",
  imageUrl: "https://cdn.pixabay.com/photo/2018/12/10/21/33/winter-boots-3867775_1280.jpg",
  note : 4.5,
  quantity : 10
}

}
