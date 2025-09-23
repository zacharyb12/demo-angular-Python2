import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../../../models/product.model';
import { ServiceExo } from '../../../../../core/services/service-exo/service-exo';

@Component({
  selector: 'app-exo-details',
  imports: [],
  templateUrl: './exo-details.html',
  styleUrl: './exo-details.css'
})
export class ExoDetails {

  id : number = -1;

  product! : Product;

  constructor(
    // permet de recuperer les infos de la route active
    private readonly activatedRoute : ActivatedRoute,
    private readonly productService : ServiceExo
  ){
    // ici on recupere une capture de la route et on effectue la conversion en number
    this.id = +this.activatedRoute.snapshot.params['id'];
    console.log('valeur :' + this.id);
    console.log('type  :' +typeof this.id);
    
    this.getById();
  }

  getById(){
  const result = this.productService.getById(this.id);
  if(result){
    this.product = result;
  }
  }
}
