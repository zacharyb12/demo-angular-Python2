import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../../core/services/service-auth/auth-service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css'
})
export class LoginComponent {

loginForm : FormGroup;

isLogged : boolean = false;
isLoggedSignal = signal<boolean>(false);

private readonly authService = inject(AuthService)
private readonly fb = inject(FormBuilder);

constructor(){
  this.loginForm = this.fb.group({
    email : ['',[ Validators.required]],
    password : ['',[Validators.required,Validators.minLength(4)]]
  })


this.isLoggedSignal = this.authService.isLoggedSignalS




  
}


login(){
  if(this.loginForm.valid){
this.authService.Login(this.loginForm.value.email, this.loginForm.value.password);

  }
}

logout(){
  this.authService.logout();
  this.isLogged = false;
}
}
