import { Component } from '@angular/core';
import { User } from '../models/user.model';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "../components/shared/navbar-component/navbar-component";
import { FooterComponent } from "../components/shared/footer-component/footer-component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {

monUser : User = {
email : "",
password : "",
age : 0,
isAdmin : false
}

test(){
  let num : number = 5;
  const num2 : number = 10;
}


// Type Typescript ------------------------------------------------------

// string : chaine de caractere
texte : string = "Bonjour";

// number : nombre
nombre : number = 5.0;

// boolean : true / false
booleen : boolean = true;

// any : n'importe quel type
valeur : any = "Bonjour";
valeur2 : any = 5;
valeur3 : any = true;

// undefined : valeur non definie
valeurIndefinie : undefined = undefined;

// null : valeur nulle
valeurNulle : null = null;

// liste de type ----------------------------------------------------------------------------

// tableau de string
listeString : string[] = ["Bonjour", "Hello", "Hola"];

// tableau de number
listeNumber : number[] = [5, 10, 15];

// tableau de boolean
listeBoolean : boolean[] = [true, false, true];

// tableau de any : déconseillé
// listeAny : any[] = ["Bonjour", 5, true];

// exemple User[]

listeUser : User[] = [];

//------------------------------------------------------------------------------------------

// Portée des variables et objets

// objet propre a la classe App utilisable dans et en dehors des methodes de la classe
userClasse : User = {
email : "",
password : "",
age : 0,
isAdmin : false
}
 
// objet déclaré en parametre de la methode accessible uniquement dans la methode
testUser(userParams : User){
  this.userClasse.email = "monEmail@mail.com"

userParams.email = "monAutreEmail@mail.com"
}

// ----------------------------------------------------------------

// Declaration methodes

// variables utilisé dans les methodes
nom : string = "Doe";
email : string = "mail@mail.com"

// modification de la variable nom sans parametre
resetUserName(){
this.nom = ""
}


// modification de la variable nom avec parametre 
setUserNameParams(newName : string){
  this.nom = newName
}

setEmailParams(newMail : string) : void{
  this.email = newMail
}

// utilisation d'une methode pour declencher plusieurs autres methodes
UpdateValue(): void{
  this.setEmailParams("params1");
  this.setUserNameParams("params2");
}


// methode avec return doit etre respecter sinon erreur
additionReturnValue(a : number , b : number): number {
let result =  a + b;

return result;
}

// methode sans return de type void ne peut pas retourner de valeur
addition(a : number , b : number): void {
console.log(a + b);
// return a + b; genererait une erreur car la methode est de type void
}


// Si le type est respecté pas d'erreur même si le tableau est vide 
getUsers() : User[]{
let users : User[] = []
 return users;
}

// ----------------------------------------------------------------

// valeur par defaut dans les parametres d'une methode
getUserId(id : number = -1){
console.log(id);

}








}
