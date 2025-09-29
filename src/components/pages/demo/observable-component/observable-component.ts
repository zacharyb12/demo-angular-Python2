import { Component, inject } from '@angular/core';
import { ObservableService } from '../../../../core/services/observable/observable-service';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-component',
  imports: [
    // utiliser l'observable dans le template necessite le pipe async
    AsyncPipe
  ],
  templateUrl: './observable-component.html',
  styleUrl: './observable-component.css'
})
export class ObservableComponent {

  // injection du service
private readonly observService = inject(ObservableService)

// type Observable de string[]
dataObservable$! : Observable<string[]>;

// type simple string[]
dataComponent : string[] = []


// Subscribtion permet de gerer les emissions de l'observable
mySubscrition : Subscription = new Subscription();


constructor(){
// 1 : Exemple simple d'utilisation d'un observable


// ici on enregistre la souscription dans une variable de type Subscription
this.mySubscrition = this.observService.getProducts().subscribe({
  // subscribe : permet de consommer les valeurs emises par l'observable
  
  next : (data) => {
    // le next represente la reponse ( comme dans une promesse )
    // c'est ici qu'on recupere les valeurs emises par l'observable et qu'on l'affecte à une variable du composant
    this.dataComponent = data;

  },
  error : (err) => {
    // La reponse du serveur peut etre une erreur
    // peut etre utile pour afficher un message d'erreur à l'utilisateur
    console.log(err);

  },
  complete : () => {
    // complete : lorsque l'observable a fini d'emettre des valeurs
    // utile pour afficher un loading lors du chargement tant que les données n'ont pas été récupérer
    console.log('complete')
    this.mySubscrition.unsubscribe();
  }
})

// le meme observable est utilisé pour la démonstration
// A partir du moment ou l'on a plusieurs abonnements à gérer on peut jutiliser le meme objet subscription
this.mySubscrition.add(this.observService.getProducts().subscribe({}))

// -----------------------------------------------------------------------------


// on peut directement assigner l'observable à une variable de type Observable
// il sera necessaire d'utiliser le pipe :  async
// le desabonnement est automatique avec le pipe async
this.dataObservable$ = this.observService.getProducts();

}
// fin du constructeur

// -------------------------------------------------------------------------------


// Par defaut on utilise le onDestroy pour se desabonner
ngOnDestroy(): void {
  // desabonnement de l'observable pour eviter les fuites memoires
this.mySubscrition.unsubscribe();
}




// ---------------------------------------------------------------------------------------------------------

// Exemple avec un envoie de valeurs en continue

// array qui reçoit des valeurs en continue
counter : number[] = [];

// l'abonnement permet de declencher l'arret de l'abonnement
subscriptionCounter : Subscription = new Subscription();

// on declenche l'abonnement manuellement
start(){
  this.subscriptionCounter = this.observService.getCounter().subscribe({
    next : (value) => {
      this.counter.push(value);
    }
  })
}

// on arrete l'abonnement manuellement
stop(){
  this.subscriptionCounter.unsubscribe();
}


}
