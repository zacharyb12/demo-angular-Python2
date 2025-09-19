import { Component, input, output } from '@angular/core';
import { Product } from '../../../../../models/product.model';

@Component({
  selector: 'product-list',
  imports: [],
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.css'
})
export class ProductListComponent {

listProduct = input.required<Product[]>();

addEmmiter = output<number>();

addProduct(id : number){
  this.addEmmiter.emit(id);
}
}
