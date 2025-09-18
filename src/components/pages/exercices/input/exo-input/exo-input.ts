import { Component } from '@angular/core';
import { Product } from '../../../../../models/product.model';
import { ExoInputEnfant } from "../exo-input-enfant/exo-input-enfant";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exo-input',
  imports: [
    ExoInputEnfant,
    FormsModule
],
  templateUrl: './exo-input.html',
  styleUrl: './exo-input.css'
})
export class ExoInput {

 listString : string[] = [];

 message : string = "";

 addMessage(){
  this.listString.push(this.message)
  this.message = ""
 }

 
}
