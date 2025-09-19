import { Component, inject } from '@angular/core';
import { Product } from '../../../../../models/product.model';
import { DemoService } from '../../../../../core/services/monService/demo-service';

@Component({
  selector: 'app-details-product-serv',
  imports: [],
  templateUrl: './details-product-serv.html',
  styleUrl: './details-product-serv.css'
})
export class DetailsProductServ {

product! : Product;

// private readonly monService = inject(DemoService);
constructor(
  private readonly monService : DemoService
){
  this.getProducts();
}


getProducts(){
  const product = this.monService.getProductById(1);
  if(product){

    this.product = product;
  }
}


deleteProduct(id : number){
  this.monService.delete(id);
}

}
