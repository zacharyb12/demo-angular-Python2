import { Component } from '@angular/core';
import { Product } from '../../../../models/product.model';

@Component({
  selector: 'app-directive-exo',
  imports: [],
  templateUrl: './directive-exo.html',
  styleUrl: './directive-exo.css'
})
export class DirectiveExo {

  ListProduct : Product[] = [];

  isLoading : boolean = false;

  message : string = "Loading...";


  // Au Chargement de la page , afficher un message de chargement 
  // pendant x secondes
  // puis afficher la liste des produits


  // ------------------------------------------------------------
  // Partir d'une liste de produits vide

  // prevoyer une methode qui charge la liste 

  // Delai pour utiliser le chargement de la liste 

  // Utilisation du for pour l'affichage
}
