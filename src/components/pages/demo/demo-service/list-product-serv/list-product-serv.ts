import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../../../../../models/product.model';
import { DemoService } from '../../../../../core/services/monService/demo-service';

@Component({
  selector: 'app-list-product-serv',
  imports: [],
  templateUrl: './list-product-serv.html',
  styleUrl: './list-product-serv.css',
  // ici on demande une instance de DemoService au  chargement du composant
  providers: [DemoService]
})
export class ListProductServ{

  ListProducts : Product[] = [];


  // il faut avoir injecter le service pour pouvoir l'utiliser 
  // pour appeler les methodes du service il faudra utiliser this.nomService.nomMethode()

  // // ancienne methode
  constructor(
    private readonly serviceDemoLocal: DemoService
  ) { 

    // on peut appeler le service directement dans le constructeur
    // this.ListProducts = this.serviceDemoLocal.getProducts();
 

    this.getProducts();
  }
  // nouvelle injection
  private readonly serviceDemoNew = inject(DemoService)


  // on peut creer une methode pour appeler le service
  // et l'appeler dans le ngOnInit ou dans le constructeur
  getProducts(){
    this.ListProducts = this.serviceDemoLocal.getProducts();
  }
  
  ngOnInit(): void {
    this.ListProducts = this.serviceDemoNew.getProducts();
  }

}
