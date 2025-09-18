import { Component, Input } from '@angular/core';
import { Product } from '../../../../../models/product.model';

@Component({
  selector: 'app-enfant-component',
  imports: [],
  templateUrl: './enfant-component.html',
  styleUrl: './enfant-component.css'
})
export class EnfantComponent {

  // Input Permet de recevoir une donnée du parent

  @Input() value : string = "voici la valeur";


}
