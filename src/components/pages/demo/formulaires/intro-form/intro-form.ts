import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-intro-form',
  imports: [
    FormsModule,
    NgStyle
  ],
  templateUrl: './intro-form.html',
  styleUrl: './intro-form.css'
})
export class IntroForm {


  
  // Gestion des formulaires

  // champ unique

  // utilisation du binding Two-Way [(ngModel)]
  name : string = '';
  errorMessage : string = '';

  submitName(){
  if(this.name.length < 3){
  this.errorMessage = "Le nom doit contenir au moins 3 caractères";

  }else if(this.name.length > 10){
    this.errorMessage = "Le nom doit contenir au maximum 10 caractères";

  }
  else{
    console.log(this.name);
  }

  }
}
