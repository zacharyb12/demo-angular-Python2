import { Injectable } from '@angular/core';
import { Product } from '../../../models/product.model';
import { addProduct } from '../../../models/addProduct.model';

@Injectable({
  providedIn: 'root'
})

export class ServiceExo {
  
products : Product[] = [
  { 
    id: 1, 
    name: 'Product 1', 
    price: 10 , 
    note: 4.5,
    quantity: 100, 
    description: 'Description for Product 1',
  imageUrl : 'https://via.placeholder.com/150'
},
  { 
    id: 2, 
    name: 'Product 2', 
    price: 10 , 
    note: 4.5,
    quantity: 100, 
    description: 'Description for Product 2',
  imageUrl : 'https://via.placeholder.com/150'
}
]

addProduct(newProduct : addProduct) {
  const product : Product = {
    id: this.products.length + 1,
    name: newProduct.name,
    price: newProduct.price,
    description: newProduct.description,
    imageUrl: newProduct.imageUrl,
    note: 3,
    quantity: newProduct.quantity
  }
  this.products.push(product);
}

getProducts() {
  return this.products;
}

deleteProduct(id : number) {
  this.products = this.products.filter(product => product.id !== id);
}

getById(id : number){
  const product = this.products.find(p => p.id === id);
  return product;
}

}
