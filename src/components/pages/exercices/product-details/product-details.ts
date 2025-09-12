import { Component } from '@angular/core';
import { Product } from '../../../../models/product.model';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.html',
  styleUrl: './product-details.css'
})
export class ProductDetails {

product : Product  = {
  id: 1,
  name: "Ordinateur portable",
  price: 799.99,
  description: "Un ordinateur portable puissant et léger. Parfait pour le travail et les loisirs. Conçu pour durer avec une batterie longue durée et un écran haute résolution. Idéal pour les professionnels et les étudiants.",
  imageUrl: "https://cdn.pixabay.com/photo/2021/08/06/17/20/computer-6526819_640.jpg",
  note : 4.5,
  quantity : 10
}

}
