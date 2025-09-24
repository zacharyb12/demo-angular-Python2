import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-control-demo',
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './form-control-demo.html',
  styleUrl: './form-control-demo.css'
})
export class FormControlDemo {

  name = new FormControl('valeur par défaut');
 

  sendValue() {
    console.log(this.name.value);
  }
}
