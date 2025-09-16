import { Routes } from '@angular/router';
import { HomeComponent } from '../components/pages/home-component/home-component';
import { HomeRouter } from '../components/pages/demo/home-router/home-router';
import { Bindings } from '../components/pages/demo/bindings/bindings';
import { ExoRouting } from '../components/pages/exercices/exo-routing/exo-routing';
import { CompteurComponent } from '../components/pages/exercices/compteur-component/compteur-component';
import { ProductDetails } from '../components/pages/exercices/product-details/product-details';
import { Bootstrap } from '../components/pages/demo/bootstrap/bootstrap';
import { PipeComponent } from '../components/pages/demo/pipe-component/pipe-component';
import { DirectiveComponent } from '../components/pages/demo/directive-component/directive-component';
import { DirectivesExo1 } from '../components/pages/exercices/directives-exo1/directives-exo1';

export const routes: Routes = [
    {path: '' , component : HomeComponent},
    {path : 'demo' , component : HomeRouter ,children : [ 
        {path : 'bindings' , component : Bindings},
        {path : 'bootstrap' , component : Bootstrap},
        {path : 'pipes' , component : PipeComponent},
        {path : 'directives' , component : DirectiveComponent}
    ]},
    {path : 'exo' , component : ExoRouting , children : [ 
        {path : 'compteur' , component : CompteurComponent},
        {path : 'product' , component : ProductDetails},
        {path : 'directives-exo1' , component : DirectivesExo1}
    ]}
];


//http://localhost:4200/demo/bindings