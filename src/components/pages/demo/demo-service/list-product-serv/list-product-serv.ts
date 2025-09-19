import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../../../../models/product.model';
import { DemoService } from '../../../../../core/services/monService/demo-service';

@Component({
  selector: 'app-list-product-serv',
  imports: [],
  templateUrl: './list-product-serv.html',
  styleUrl: './list-product-serv.css'
})
export class ListProductServ{

  ListProducts : Product[] = [];

  // // ancienne methode
  constructor(
    private readonly serviceDemoLocal: DemoService
  ) { 
 
  }

  getProducts(){
    this.ListProducts = this.serviceDemoLocal.getProducts();
  }
  
  // // ngOnInit(): void {
  // //   this.ListProducts = this.serviceDemoNew.getProducts();
  // // }

  // // nouvelle injection
  // private readonly serviceDemoNew = inject(DemoService)
}
