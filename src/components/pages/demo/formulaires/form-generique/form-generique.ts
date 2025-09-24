import { Component, Input, OnChanges, SimpleChanges, signal, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormControl, FormArray } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-generique',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule
  ],
templateUrl: './form-generique.html',
  styleUrl: './form-generique.css'
})
export class FormGenerique {
  
  @Input() data: object = {};

  form!: FormGroup;
  
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({});
  }

  submitForm() {
    const currentForm = this.form;
    if (currentForm?.valid) {
      console.log('Formulaire soumis :', currentForm.value);
    } else {
      console.log('Formulaire invalide');
      currentForm?.markAllAsTouched();
    }
  }
}