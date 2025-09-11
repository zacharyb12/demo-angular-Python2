import { Routes } from '@angular/router';
import { HomeComponent } from '../components/pages/home-component/home-component';
import { NavbarComponent } from '../components/shared/navbar-component/navbar-component';

export const routes: Routes = [
    {path: '' , component : HomeComponent},
    {path: 'nav' , component : NavbarComponent},
];
