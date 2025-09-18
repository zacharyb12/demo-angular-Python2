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

  title : string = "Je suis le parent";


  productParentList : Product[]= [ 
  {
    id : 1,
    name: "Produit 1",
    price: 100,
    description: "Description du produit 1",
    quantity: 10,
    imageUrl: "https://via.placeholder.com/150",
    note : 4.5
  },
    {
    id : 2,
    name: "Produit 2",
    price: 100,
    description: "Description du produit 2",
    quantity: 10,
    imageUrl: "https://via.placeholder.com/150",
    note : 4.5
  },
    {
    id : 3,
    name: "Produit 3",
    price: 100,
    description: "Description du produit 3",
    quantity: 10,
    imageUrl: "https://via.placeholder.com/150",
    note : 4.5
  }
]
}
