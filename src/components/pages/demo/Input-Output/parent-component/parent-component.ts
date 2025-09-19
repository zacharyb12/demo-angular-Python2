import { Component } from '@angular/core';
import { EnfantComponent } from '../enfant-component/enfant-component';
import { Product } from '../../../../../models/product.model';
import { ProductDetails } from "../../../exercices/product-details/product-details";

@Component({
  selector: 'app-parent-component',
  imports: [
    EnfantComponent,
    ProductDetails
],
  templateUrl: './parent-component.html',
  styleUrl: './parent-component.css'
})
export class ParentComponent {

  // Titre du parent variable simple 
  title : string = "Je suis le parent";

// liste de produits dans le parent
  productParentList : Product[]= [ 
  {
    id : 1,
    name: "Produit 1",
    price: 100,
    description: "Description du produit 1",
    quantity: 10,
    imageUrl: "https://cdn.pixabay.com/photo/2025/08/25/20/04/nature-9796816_1280.jpg",
    note : 4.5
  },
    {
    id : 2,
    name: "Produit 2",
    price: 100,
    description: "Description du produit 2",
    quantity: 10,
    imageUrl: "https://cdn.pixabay.com/photo/2025/08/25/20/04/nature-9796816_1280.jpg",
    note : 4.5
  },
    {
    id : 3,
    name: "Produit 3",
    price: 100,
    description: "Description du produit 3",
    quantity: 10,
    imageUrl: "https://cdn.pixabay.com/photo/2025/08/25/20/04/nature-9796816_1280.jpg",
    note : 4.5
  }
]

// Méthode pour supprimer un produit de la liste dans le parent
removeProduct(id : number){
this.productParentList = this.productParentList.filter(p => p.id !== id);
}
}
