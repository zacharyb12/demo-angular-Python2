import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgbNavModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar-component',
  imports: [
    RouterLink,
    NgbNavModule, 
    NgbDropdownModule
  ],
  templateUrl: './navbar-component.html',
  styleUrl: './navbar-component.css'
})
export class NavbarComponent {

}
