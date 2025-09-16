import { Routes } from '@angular/router';
import { HomeComponent } from '../components/pages/home-component/home-component';
import { HomeRouter } from '../components/pages/demo/home-router/home-router';
import { Bindings } from '../components/pages/demo/bindings/bindings';
import { ExoRouting } from '../components/pages/exercices/exo-routing/exo-routing';
import { CompteurComponent } from '../components/pages/exercices/compteur-component/compteur-component';
import { ProductDetails } from '../components/pages/exercices/product-details/product-details';
import { Bootstrap } from '../components/pages/demo/bootstrap/bootstrap';
import { PipeComponent } from '../components/pages/demo/pipe-component/pipe-component';

export const routes: Routes = [
    {path: '' , component : HomeComponent},
    {path : 'demo' , component : HomeRouter ,children : [ 
        {path : 'bindings' , component : Bindings},
        {path : 'bootstrap' , component : Bootstrap},
        {path : 'pipes' , component : PipeComponent}
    ]},
    {path : 'exo' , component : ExoRouting , children : [ 
        {path : 'compteur' , component : CompteurComponent},
        {path : 'product' , component : ProductDetails}
    ]}
];


//http://localhost:4200/demo/bindings