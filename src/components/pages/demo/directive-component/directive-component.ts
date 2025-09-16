import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { User } from '../../../../models/user.model';
import { NgbSlide } from "../../../../../node_modules/@ng-bootstrap/ng-bootstrap/index";

@Component({
  selector: 'app-directive-component',
  imports: [
    NgIf,
    NgbSlide
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

}
