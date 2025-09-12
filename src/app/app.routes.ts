import { Routes } from '@angular/router';
import { HomeComponent } from '../components/pages/home-component/home-component';
import { HomeRouter } from '../components/pages/demo/home-router/home-router';
import { Bindings } from '../components/pages/demo/bindings/bindings';

export const routes: Routes = [
    {path: '' , component : HomeComponent},
    {path : 'demo' , component : HomeRouter ,children : [
        {path : 'bindings' , component : Bindings}
    ]},
//  {path : '' , component : "Composant" , children : [
//      {path : '' , component : "Composant"}]}
];


//http://localhost:4200/demo/bindings