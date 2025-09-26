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


isAdminSignalNavbar = signal<boolean>(false);

bool : boolean = false;

private readonly authService = inject(AuthService)

constructor(){

this.isAdminSignalNavbar = this.authService.isAdminSignalService

}
}
