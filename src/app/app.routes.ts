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
import { FormControlDemo } from '../components/pages/demo/formulaires/form-control-demo/form-control-demo';
import { IntroForm } from '../components/pages/demo/formulaires/intro-form/intro-form';
import { FormGroupDemo } from '../components/pages/demo/formulaires/form-group-demo/form-group-demo';
import { FormArrayDemo } from '../components/pages/demo/formulaires/form-array-demo/form-array-demo';
import { SignalDemo } from '../components/pages/demo/signal-demo/signal-demo';
import { Guard } from '../components/pages/demo/guard/guard';
import { formGuard } from '../core/guard/form-guard/form-guard';
import { childGuard } from '../core/guard/child-guard/child-guard';
import { matchGuard } from '../core/guard/match-guard/match-guard';
import { adminGuardGuard } from '../core/guard/admin-guard/admin-guard-guard';
import { BookAppLogin } from '../components/pages/exercices/book-app-login/book-app-login';
import { ObservableComponent } from '../components/pages/demo/observable-component/observable-component';
import { HttpReq } from '../core/services/httpRequest/http-req';
import { HttpRequest } from '../components/pages/demo/http-request/http-request';
import { UserList } from '../components/pages/demo/resolver-user/user-list/user-list';
import { UserDetails } from '../components/pages/demo/resolver-user/user-details/user-details';
import { userResolver } from '../core/resolver/user-resolver';

export const routes: Routes = [
    {path: '' , component : HomeComponent},
    // canActivateChild permet de proteger toutes les routes enfants d'une route
    {path : 'demo' , component : HomeRouter ,children : [ 
        // utilisation du guard AdminGuard permet de verifier avant d'acceder a une seule route
        {path : 'bindings' , component : Bindings ,canActivate : [adminGuardGuard] },
        // utilisation du guard MatchGuard permet de verifier avant de charger un component
        {path : 'bootstrap' , canMatch : [matchGuard], loadComponent : () => import('../components/pages/demo/bootstrap/bootstrap').then(c => c.Bootstrap)},
        {path : 'pipes' , component : PipeComponent },
        {path : 'directives' , component : DirectiveComponent},
        {path : 'input-output' , component : ParentComponent},
        {path : 'serv-list-product' , component : ListProductServ},
        {path : 'serv-details-product' , component : DetailsProductServ},
        {path : 'serv-create-product' , component : AddProductServ},
        {path : 'form-intro' , component : IntroForm},
        {path : 'form-controle' , component : FormControlDemo},
        // Permet d'effectuer une verification avant de quitter la page
        {path : 'form-group' , component : FormGroupDemo , canDeactivate : [formGuard]},
        {path : 'form-array' , component : FormArrayDemo},
        {path : 'signals' , component : SignalDemo},
        {path : 'guard' , component : Guard},
        {path : 'observable' , component : ObservableComponent},
        {path : 'http' , component : HttpRequest},
        {path : 'resolver', component : UserList},
        {path : 'resolver-details/:id' , component : UserDetails , resolve : {user : userResolver}}
    ]},
    {path : 'exo' , component : ExoRouting , canActivateChild : [childGuard] ,  children : [ 
        {path : 'compteur' , component : CompteurComponent},
        {path : 'product' , component : ProductDetails},
        {path : 'directives-exo1' , component : DirectivesExo1},
        {path : 'directives-exo2' , component : DirectivesExo2},
        {path : 'input-output1' , component : ExoInput},
        {path : 'input-output-bindings' , component : ExoInputBindings},
        {path : 'exo-input-list-product' , component : ContainerComponent},
        {path : 'exo-list' , component : ExoList},
        // ici je prevois un paramètre dans la route
        {path : 'exo-details/:id' , component : ExoDetails},
        {path : 'exo-add' , component : ExoAdd},
        {path : 'book-app-login' , component : BookAppLogin}
                // {path : 'exo-add' , loadComponent : ()=> import('../components/pages/exercices/exo-service/exo-add/exo-add').then(m => m.ExoAdd)}
    ]},
    {path : '**' , redirectTo : ''}
];
