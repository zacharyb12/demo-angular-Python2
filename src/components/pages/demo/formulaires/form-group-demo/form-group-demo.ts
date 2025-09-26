import { NgStyle } from '@angular/common';
import { Component, inject, Input, input, signal, SimpleChanges } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Product } from '../../../../../models/product.model';
import { FormService } from '../../../../../core/services/form-service/form-service';

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

  // 5 Abonnement aux changements du formulaire
    this.monForm.valueChanges.subscribe({
    next : () => {
      // chaque fois qu'une valeur change dans le formulaire on met a jour le signal
      this.formService.changeSignal();
    }
  });
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
// -----------------------------------------------------------------------


// signal pour suivre les changements dans le formulaire
private formService = inject(FormService)

isDirtyComponent = this.formService.formGroupDirty;



@Input() message! : string;
 ngOnChanges(changes: SimpleChanges): void {
// ngOnChanges est déclenché à chaque changement d'une valeur d'une propriété décorée avec @Input

// on lui passe une valeur en chaine de caractere
// par exemple <app-form-group-demo [message]="'Bonjour'"></app-form-group-demo>
 
  if(changes['message']){
    this.formService.changeSignal();
  }
  
 }



}
