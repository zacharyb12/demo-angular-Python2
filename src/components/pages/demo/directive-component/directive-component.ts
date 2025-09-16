import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { User } from '../../../../models/user.model';
import { Bootstrap } from "../bootstrap/bootstrap";
import { ProductDetails } from "../../exercices/product-details/product-details";

@Component({
  selector: 'app-directive-component',
  imports: [
    NgIf
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
email : "john.doe@example.com",
password : "password123",
age : 30,
isAdmin : false
}

myValue : number = 10;


listUsers : User[] = [
  {
    email : "john.doe@example.com",
    password : "password123",
    age : 30,
    isAdmin : false
  },
    {
    email : "jane.doe@example.com",
    password : "password123",
    age : 30,
    isAdmin : false
  },
    {
    email : "johnny.doe@example.com",
    password : "password123",
    age : 30,
    isAdmin : false
  }
]

details(id : number){
  alert("Details de l'utilisateur " + id);
}


}