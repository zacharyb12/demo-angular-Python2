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
import { DirectivesExo2 } from '../components/pages/exercices/directives-exo2/directives-exo2';
import { ParentComponent } from '../components/pages/demo/Input-Output/parent-component/parent-component';
import { ExoInput } from '../components/pages/exercices/input/exo-input/exo-input';
import { ExoInputBindings } from '../components/pages/exercices/exo-input-bindings/exo-input-bindings/exo-input-bindings';
import { ContainerComponent } from '../components/pages/exercices/exo-input-double-liste/container-component/container-component';
import { ListProductServ } from '../components/pages/demo/demo-service/list-product-serv/list-product-serv';
import { DetailsProductServ } from '../components/pages/demo/demo-service/details-product-serv/details-product-serv';
import { AddProductServ } from '../components/pages/demo/demo-service/add-product-serv/add-product-serv';
import { ExoList } from '../components/pages/exercices/exo-service/exo-list/exo-list';
import { ExoDetails } from '../components/pages/exercices/exo-service/exo-details/exo-details';
import { ExoAdd } from '../components/pages/exercices/exo-service/exo-add/exo-add';

export const routes: Routes = [
    {path: '' , component : HomeComponent},
    {path : 'demo' , component : HomeRouter ,children : [ 
        {path : 'bindings' , component : Bindings},
        {path : 'bootstrap' , component : Bootstrap},
        {path : 'pipes' , component : PipeComponent},
        {path : 'directives' , component : DirectiveComponent},
        {path : 'input-output' , component : ParentComponent},
        {path : 'serv-list-product' , component : ListProductServ},
        {path : 'serv-details-product' , component : DetailsProductServ},
        {path : 'serv-create-product' , component : AddProductServ},
    ]},
    {path : 'exo' , component : ExoRouting , children : [ 
        {path : 'compteur' , component : CompteurComponent},
        {path : 'product' , component : ProductDetails},
        {path : 'directives-exo1' , component : DirectivesExo1},
        {path : 'directives-exo2' , component : DirectivesExo2},
        {path : 'input-output1' , component : ExoInput},
        {path : 'input-output-bindings' , component : ExoInputBindings},
        {path : 'exo-input-list-product' , component : ContainerComponent},
        {path : 'exo-list' , component : ExoList},
        {path : 'exo-details' , component : ExoDetails},
        {path : 'exo-add' , component : ExoAdd}
    ]}
];


//http://localhost:4200/demo/bindings