import { Component, inject } from '@angular/core';
import { addProduct } from '../../../../../models/addProduct.model';
import { ServiceExo } from '../../../../../core/services/service-exo/service-exo';
import { FormsModule } from '@angular/forms';

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
  private readonly productService : ServiceExo
){}

// nouvelle version
private readonly productServiceNew = inject(ServiceExo)

addProduct(){
  this.productServiceNew.addProduct(this.newProduct)
}


}
