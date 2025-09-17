import { NgClass, NgFor, NgIf,NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { User } from '../../../../models/user.model';


@Component({
  selector: 'app-directive-component',
  imports: [
    NgIf,
    NgFor,
    NgClass,
    NgStyle,
],
  templateUrl: './directive-component.html',
  styleUrl: './directive-component.css'
})
export class DirectiveComponent {
// Les directives vont Permettre de gérer le DOM

isVisible : boolean = false;
message : string = "Bonjour tout le monde";

toggleVisibility(){
  this.isVisible = !this.isVisible;
}

user : User = {
  id : 1,
email : "john.doe@example.com",
password : "password123",
age : 30,
isAdmin : false
}

myValue : number = 10;

// Utilisation du Track
selected : number | null = null; // 1

selectedProduct(id : number){
  console.log(id);
  
  this.selected = id;
}


listUsers : User[] = [
  {
    id : 1,
    email : "john.doe@example.com",
    password : "password123",
    age : 30,
    isAdmin : false
  },
    {
      id : 1,
    email : "jane.doe@example.com",
    password : "password123",
    age : 30,
    isAdmin : false
  },
    {
      id : 1,
    email : "johnny.doe@example.com",
    password : "password123",
    age : 30,
    isAdmin : false
  }
]

details(id : number){
  alert("Details de l'utilisateur " + id);
}


// Directives NgClass Permet d'appliquer une classe CSS Dynamiquement
// <p [ngClass]="{'la classe' : condition booleen }">

styleActif : boolean = false;

toggleStyle(){
  this.styleActif = !this.styleActif;

}

// Directives NgStyle Permet d'appliquer un style CSS Dynamiquement le paramètre sera une methode

// Methode qui retourne du style a appliquer 

isStyleActif : boolean = false;

toggleStyleActif(){
  this.isStyleActif = !this.isStyleActif;
}

getStyles(){
  return {
    'background-color' : this.isStyleActif ? 'blue' : 'red',
    'color' : this.isStyleActif ? 'white' : 'black',
  }
}

}