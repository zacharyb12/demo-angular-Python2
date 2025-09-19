import { Component, EventEmitter, input, Input, output, Output, signal } from '@angular/core';
import { Product } from '../../../../../models/product.model';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-enfant-component',
  imports: [NgIf],
  templateUrl: './enfant-component.html',
  styleUrl: './enfant-component.css'
})
export class EnfantComponent {


  // Input Permet de recevoir une donnée du parent ancienne version
  @Input() value : string = "valeur par defaut";
  // oblige la presence de la valeur
  // @Input({required : true}) value : string = "valeur par defaut";
  @Input() productListEnfant! : Product[];

  // Nouvelle version
  valueNewVersion = input<string>();
  // oblige la presence de la valeur plus de undefined
  // valueNewVersion = input.required<string>();
  productListEnfantNewVersion = input<Product[]>();

  // @Output qui permet de declencher un evenement vers le parent
  // ancienne version
  @Output() remove = new EventEmitter<number>();
  // nouvelle version
  removeNew = output<number>();

  removeFromChild(id :  number){
    this.remove.emit(id);
    this.removeNew.emit(id);
  }

}
