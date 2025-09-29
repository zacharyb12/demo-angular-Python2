import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../../core/services/service-auth/auth-service';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-component',
  imports: [
    FormsModule,
    ReactiveFormsModule,
],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css'
})
export class LoginComponent {

  // isOpen permet d'ouvrir ou fermer le formulaire
isOpen = signal<boolean>(false);

loginForm : FormGroup;

// signal pour verifier si l'utilisateur est connecté ( relié au signal du service)
isLoggedSignal = signal<boolean>(false);

private readonly authService = inject(AuthService)
private readonly fb = inject(FormBuilder);

valueBoolean = false;
constructor()
{
  this.loginForm = this.fb.group({
    email : ['',[ Validators.required]],
    password : ['',[Validators.required,Validators.minLength(4)]]
  })

  // copie de reference du signal du service
this.isLoggedSignal = this.authService.isLoggedSignalService;

// copie de valeur du signal du service
// this.valueBoolean = this.authService.isLoggedSignalService()
}

toggleForm(){
  // inversion du booleen pour gerer l'ouverture et la fermeture du formulaire
  this.isOpen.update(value => !value);
}

login(){
  if(this.loginForm.valid){
    // si le formulaire est valide j'appelle la methode login du service
this.authService.login(this.loginForm.value.email,this.loginForm.value.password);
  }
}

logout(){
  // j'appelle la methode logout du service
  this.authService.logout();
}
}
