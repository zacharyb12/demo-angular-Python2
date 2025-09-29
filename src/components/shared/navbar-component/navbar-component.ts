import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbNavModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from "../login-component/login-component";
import { AuthService } from '../../../core/services/service-auth/auth-service';

@Component({
  selector: 'app-navbar-component',
  imports: [
    RouterLink,
    NgbNavModule,
    NgbDropdownModule,
    LoginComponent
],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.css'
})
export class NavbarComponent {

// declaration d'un signal pour verifier le role de l'utilisateur ( de type signal)
isAdminSignalNavbar = signal<boolean>(false);

// variable classique de type boolean
bool : boolean = false;

// injection du service AuthService
private readonly authService = inject(AuthService)

constructor(){
// copie de la reférence du signal du service AuthService dans le signal du composant NavbarComponent
this.isAdminSignalNavbar = this.authService.isAdminSignalService

}
}
