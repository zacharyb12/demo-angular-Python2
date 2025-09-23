import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../../../../models/product.model';
import { ServiceExo } from '../../../../../core/services/service-exo/service-exo';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-exo-list',
  imports: [],
  templateUrl: './exo-list.html',
  styleUrl: './exo-list.css'
})
export class ExoList implements OnInit{

productsList : Product[] = [];

// ancienne version
constructor(
  private readonly productService : ServiceExo,
  // le Router permet de naviguer entre les pages
  private router : Router
){
  
}
private readonly routerNew = inject(Router)

  ngOnInit(): void {
    this.getProducts();
  }

// nouvelle version

private readonly productServiceNew = inject(ServiceExo)


getProducts(): void {
  this.productsList = this.productService.getProducts();
}

deleteProduct(id:number){
  this.productService.deleteProduct(id);
  this.getProducts();
}

detailsProduct(id:number){
  this.router.navigate(['exo/exo-details', id]);
  // this.router.navigateByUrl('exo/exo-details/' + id);
}
}
