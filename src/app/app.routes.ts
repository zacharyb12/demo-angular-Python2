import { Routes } from '@angular/router';
import { HomeComponent } from '../components/pages/home-component/home-component';
import { HomeRouter } from '../components/pages/demo/home-router/home-router';
import { Bindings } from '../components/pages/demo/bindings/bindings';
import { ExoRouting } from '../components/pages/exercices/exo-routing/exo-routing';
import { ExoBindings } from '../components/pages/exercices/exo-bindings/exo-bindings';

export const routes: Routes = [
    {path: '' , component : HomeComponent},
    {path : 'demo' , component : HomeRouter ,children : [ 
        {path : 'bindings' , component : Bindings}  
    ]},
    {path : 'exo' , component : ExoRouting , children : [ 
        {path : 'bindings' , component : ExoBindings}
    ]}
];


//http://localhost:4200/demo/bindings