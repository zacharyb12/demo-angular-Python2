import { NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-array-demo',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgFor
  ],
  templateUrl: './form-array-demo.html',
  styleUrl: './form-array-demo.css'
})
export class FormArrayDemo {

// import et declarations

// objet formulaire
monform : FormGroup;

// constructeur de formulaire
private readonly fb  = inject(FormBuilder)

constructor(){
  // creation du formulaire
  this.monform = this.fb.group({
    title : ['',[Validators.required]],
    authors : this.fb.array([])
  })
  
}

// identifier un champ du formulaire
get Author(){
return this.monform.get('authors') as FormArray;
}


// ajouter un element de formulaire
addAuthor(){
this.Author.push(
  this.fb.control('',[Validators.required])
)
}


// supprimer un element de formulaire
removeAuthor(index : number){
this.Author.removeAt(index)
}

submitForm(){
  console.log(this.monform.value)
}

}
