import { Component, OnInit } from '@angular/core';
import { ProductNew } from '../../../../models/product-new.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-directives-exo2',
  imports: [NgClass],
  templateUrl: './directives-exo2.html',
  styleUrl: './directives-exo2.css',

})
export class DirectivesExo2 implements OnInit {

// @if(booleen){} : affichage conditionnel

// @for(item of items;track item){} : affichage répétitif
  //Variables généré par le track : $count , $index, $first, $last, $even, $odd
  // ce qui permet d'identifier chaque élément de la liste
// Pour appliquer un style 

            // Action qui transmet l'index de l'element : 
                // (mouseenter)="selectedProduct($index)"

            // Precise La classe a applique si la condition est true :  
                // [class.selected]="$index === selected"


// @switch(){ @case { code } } : affichage alternatif

// ngClass : appliquer une classe CSS de façon conditionnelle ( necessite un import de NgClass )

// ngStyle : appliquer un style CSS de façon conditionnelle ( necessite un import de NgStyle )

// la liste des elements a afficher
productsEmpty : ProductNew[] = [];

  products : ProductNew[] = [
    {
      id: 1,
      name: 'Product 1',
    price: 100,
    description: 'Description for Product 1',
    note: 4.5,
    quantity: 10,
    promo: true
  },
  {
    id: 2,
    name: 'Product 2',
    price: 120,
    description: 'Description for Product 2',
    note: 3.8,
    quantity: 5,
    promo: false
  },
  {
    id: 3,
    name: 'Product 3',
    price: 80,
    description: 'Description for Product 3',
    note: 4.2,
    quantity: 15,
    promo: true
  },
  {
    id: 4,
    name: 'Product 4',
    price: 150,
    description: 'Description for Product 4',
    note: 4.9,
    quantity: 8,
    promo: false
  },
  {
    id: 5,
    name: 'Product 5',
    price: 60,
    description: 'Description for Product 5',
    note: 3.5,
    quantity: 20,
    promo: true
  },
  {
    id: 6,
    name: 'Product 6',
    price: 200,
    description: 'Description for Product 6',
    note: 4.7,
    quantity: 12,
    promo: false
  },
  {
    id: 7,
    name: 'Product 7',
    price: 90,
    description: 'Description for Product 7',
    note: 3.9,
    quantity: 30,
    promo: true
  },
  {
    id: 8,
    name: 'Product 8',
    price: 110,
    description: 'Description for Product 8',
    note: 4.1,
    quantity: 7,
    promo: false
  },
  {
    id: 9,
    name: 'Product 9',
    price: 75,
    description: 'Description for Product 9',
    note: 4.0,
    quantity: 0,
    promo: true
  },
  {
    id: 10,
    name: 'Product 10',
    price: 130,
    description: 'Description for Product 10',
    note: 4.6,
    quantity: 9,
    promo: false
  },
  {
    id: 11,
    name: 'Product 11',
    price: 95,
    description: 'Description for Product 11',
    note: 3.7,
    quantity: 18,
    promo: true
  },
  {
    id: 12,
    name: 'Product 12',
    price: 140,
    description: 'Description for Product 12',
    note: 4.8,
    quantity: 6,
    promo: false
  },
  {
    id: 13,
    name: 'Product 13',
    price: 85,
    description: 'Description for Product 13',
    note: 3.6,
    quantity: 0,
    promo: true
  },
  {
    id: 14,
    name: 'Product 14',
    price: 160,
    description: 'Description for Product 14',
    note: 4.4,
    quantity: 11,
    promo: false
  },
  {
    id: 15,
    name: 'Product 15',
    price: 70,
    description: 'Description for Product 15',
    note: 3.4,
    quantity: 28,
    promo: true
  },
  {
    id: 16,
    name: 'Product 16',
    price: 180,
    description: 'Description for Product 16',
    note: 4.9,
    quantity: 4,
    promo: false
  },
  {
    id: 17,
    name: 'Product 17',
    price: 105,
    description: 'Description for Product 17',
    note: 4.3,
    quantity: 14,
    promo: true
  },
  {
    id: 18,
    name: 'Product 18',
    price: 155,
    description: 'Description for Product 18',
    note: 4.0,
    quantity: 0,
    promo: false

  }
]

// -------------------------------------------------
// Exemple avec Ngclass Un seul booleen 
// toutes les div changent de style en meme temps
// isHover : boolean = false;

// toggleIsHover(){
  //   this.isHover = !this.isHover;
  // }
  // -------------------------------------------------
  
selected : number = -1;

setSelected(index : number){
this.selected = index;
}
// methode qui applique un style : methode

// au survol appliquer le style : index === selected


// si le produit est en promotion appliquer un style : @If
// verification de la valeur isPromo


// afficher la liste avec un delai , et un message de chargement 


  ngOnInit(): void {
    setTimeout(() => {
      this.productsEmpty = this.products;
    },3000);
  }

}
