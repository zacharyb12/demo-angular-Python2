import { Component } from '@angular/core';
import { ProductListComponent } from "../product-list-component/product-list-component";
import { UserListComponent } from '../user-list-component/user-list-component';
import { Product } from '../../../../../models/product.model';
import { ProductDoubleList } from '../../../../../models/product-double-list.model';


@Component({
  selector: 'app-container-component',
  imports: [
    ProductListComponent,
    UserListComponent
],
  templateUrl: './container-component.html',
  styleUrl: './container-component.css'
})
export class ContainerComponent {

 // informations necessaires

// liste des produits
listProduct : Product[] = [
  {
    id : 1,
    name : "Ordinateur",
    price : 1500,
    description : "Un super ordinateur",
    imageUrl : "https://via.placeholder.com/150",
    note : 4.5,
    quantity : 10
  },
    {
    id : 2,
    name : "Mac",
    price : 1500,
    description : "Un super Mac",
    imageUrl : "https://via.placeholder.com/150",
    note : 4.5,
    quantity : 10
  },
]
// liste Utilisateur
ListUser : ProductDoubleList[] = [];

// Action necessaires

// ajouter un produit a la liste utilisateur
addProductToUserList(id : number){
const product = this.listProduct.find(p => p.id === id);

const inUser = this.ListUser.find(p => p.product.id === id);
if(inUser){
  inUser.quantity += 1;
}else{
  if(product){
    const newProduct : ProductDoubleList = 
    {
      product : product,
      quantity : 1
    }
    this.ListUser.push(newProduct);
  }
}



}

// supprimer un produit de la liste utilisateur
removeProductFromUserList(id : number){
  this.ListUser = this.ListUser.filter(p => p.product.id !== id);
}

// augmenter la quantite d'un produit dans la liste utilisateur
incrementQuantityParent(id : number){
  const product = this.ListUser.find(p => p.product.id === id);
  if(product){
    product.quantity += 1;
  }
}
// diminuer la quantite d'un produit dans la liste utilisateur
decrementQuantityParent(id : number){
  const product = this.ListUser.find(p => p.product.id === id);
  if(product){
    if(product.quantity > 1){
      product.quantity -= 1;
    }else{
      this.removeProductFromUserList(id);
    }
  }
}
}
