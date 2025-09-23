import { Component, inject } from '@angular/core';
import { addProduct } from '../../../../../models/addProduct.model';
import { ServiceExo } from '../../../../../core/services/service-exo/service-exo';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-exo-add',
  imports: [
    FormsModule
  ],
  templateUrl: './exo-add.html',
  styleUrl: './exo-add.css'
})
export class ExoAdd {

newProduct : addProduct = 
{
  name : '',
  price : 0,
  description : '',
  imageUrl : '',
  quantity : 0
}

// ancienne version 
constructor(
  private readonly productService : ServiceExo,
  private readonly router : Router
){}

// nouvelle version
private readonly productServiceNew = inject(ServiceExo)

addProduct(){
  this.productServiceNew.addProduct(this.newProduct)
  this.router.navigateByUrl('exo/exo-list');
}


}
