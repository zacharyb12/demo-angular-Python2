import { Injectable } from '@angular/core';
import { Product } from '../../../models/product.model';
import { addProduct } from '../../../models/addProduct.model';

@Injectable({
  // Le service sera disponible au chargement de l'application 
  providedIn: 'root',
  
  // un Service sera  disponible par module
  // providedIn: 'any'
  
  // une instance par application ( si on a plusieurs applications sur la meme page => une seule instance)
  // providedIn: 'platform',

})

export class DemoService {
  
  
listProducts : Product[] = [
  {
    id: 1,
    name: "Computer",
    price: 6500,
    quantity: 5,
    description: "A good computer",
    note: 4.5,
    imageUrl: "assets/images/computer.jpg"
  },
  {
    id: 2,
    name: "Smartphone",
    price: 1200,
    quantity: 12,
    description: "A powerful smartphone",
    note: 4.7,
    imageUrl: "assets/images/smartphone.jpg"
  },
  {
    id: 3,
    name: "Headphones",
    price: 350,
    quantity: 20,
    description: "Noise-cancelling headphones",
    note: 4.3,
    imageUrl: "assets/images/headphones.jpg"
  },
  {
    id: 4,
    name: "Keyboard",
    price: 150,
    quantity: 30,
    description: "Mechanical gaming keyboard",
    note: 4.6,
    imageUrl: "assets/images/keyboard.jpg"
  },
  {
    id: 5,
    name: "Mouse",
    price: 90,
    quantity: 25,
    description: "Wireless ergonomic mouse",
    note: 4.4,
    imageUrl: "assets/images/mouse.jpg"
  },
  {
    id: 6,
    name: "Monitor",
    price: 2200,
    quantity: 10,
    description: "4K Ultra HD monitor",
    note: 4.8,
    imageUrl: "assets/images/monitor.jpg"
  }
]

getProducts(): Product[] {
  return this.listProducts;
}

getProductById(id : number) : Product | null {
const product = this.listProducts.find(p => p.id === id);
if(product){
  return product;
}
return null;
}

addProduct(productNew : addProduct) : void{
const product : Product = {
  id: this.listProducts.length + 1,
  name: productNew.name,
  price: productNew.price,
  quantity: productNew.quantity,
  description: productNew.description,
  note : 3,
  imageUrl: productNew.imageUrl
}
this.listProducts.push(product);
}

delete(id : number){
  this.listProducts = this.listProducts.filter(p => p.id !== id);
}

}
