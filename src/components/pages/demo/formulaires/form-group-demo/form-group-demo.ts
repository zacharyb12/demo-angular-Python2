import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../../../../../models/product.model';

@Component({
  selector: 'app-form-group-demo',
  imports: [
    //1 importer les elements necessaires pour les formulaires
    FormsModule,
    ReactiveFormsModule,
    NgStyle,

  ],
  templateUrl: './form-group-demo.html',
  styleUrl: './form-group-demo.css'
})
export class FormGroupDemo {

  // 2  Declaration du formulaire de type FormGroup ( ensemble de formControls)
monForm : FormGroup;

product! : Product;

// Exemple : un formControl seul
monControl  = new FormControl('',[Validators.required]);


isSubmitted : boolean = false;

obj! : Product;

constructor(
  // 3 Injection du service FormBuilder pour construire le formulaire
  private readonly fb : FormBuilder
) {
// 4 Creation du formulaire avec ses champs et leurs validateurs
  this.monForm = this.fb.group({
    // on definit chacun des champs du formulaire avec ses validateurs(optionnels)
    // les validators doivent etre importés 
    nom: ['',[Validators.required, Validators.minLength(3)]],
    prenom: ['',[Validators.required, Validators.minLength(3)]],
    email: ['',[Validators.required, Validators.email]],
    age : [,[Validators.required,Validators.min(18)]]
  })
}

submitValue(){
  // verification de la validité du formulaire avant soumission
  if(this.monForm.valid){
    console.log(this.monForm);

  }else{

    // Dans le cas ou le formulaire n'est pas valide on peut forcer l'affichage des messages d'erreurs
    this.isSubmitted = true;
   this.monForm.markAllAsTouched();

  }
  
}




}
