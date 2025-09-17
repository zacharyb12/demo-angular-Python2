import { Component } from '@angular/core';
import { Product } from '../../../../models/product.model';

@Component({
  selector: 'app-exo-input',
  imports: [
  ],
  templateUrl: './exo-input.html',
  styleUrl: './exo-input.css'
})
export class ExoInput {

  listProducts : Product[] = [
    {
      id: 1,
      name: 'test',
      price: 799.99,
      description: 'Un ordinateur portable puissant et léger.',
      imageUrl: 'https://example.com/images/ordinateur-portable.jpg',
      note : 4.5, 
      quantity : 10
    },
        {
      id: 2,
      name: 'test',
      price: 499.99,
      description: 'Un smartphone haut de gamme avec un excellent appareil photo.',
      imageUrl: 'https://example.com/images/smartphone.jpg',
      note : 4.7,
      quantity : 10
    }
  ];
}
