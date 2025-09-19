import { Component } from '@angular/core';
import { DemoService } from '../../../../../core/services/monService/demo-service';
import { addProduct } from '../../../../../models/addProduct.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-product-serv',
  imports: [
    FormsModule
  ],
  templateUrl: './add-product-serv.html',
  styleUrl: './add-product-serv.css'
})
export class AddProductServ {

product : addProduct = {
  name: '',
  price: 0,
  quantity: 0,
  description: '',
  imageUrl: ''
};

  constructor(
    private readonly monService : DemoService
  ) {}


  addProduct(){
    this.monService.addProduct(this.product)
  }
}
