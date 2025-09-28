import { Component, computed, inject, signal, WritableSignal } from '@angular/core';
import { SignalService } from '../../../../core/services/signal-service/signal-service';
import { Subject } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { User } from '../../../../models/user.model';

@Component({
  selector: 'app-signal-demo',
  imports: [
    AsyncPipe
  ],
  templateUrl: './signal-demo.html',
  styleUrl: './signal-demo.css'
})
export class SignalDemo {

// création d'un signal simple il est relié a celui du service
// les actions sont faites via le service

counterC = signal(0);

  // injection du service
   signalService = inject(SignalService);

  // constructor() {
  //   this.counterC = this.signalService.counter;
  // }
  
  incrementC(){
    // il est ajouter ici car le constructeur est commenté au dessus 
    this.counterC = this.signalService.counter;
    this.signalService.increment()
  }

    decrementC(){
    this.signalService.decrement()
  }

// --------------------------------------------------------------

// computed signal

// copie du signal depuis la declaration du service 
 totalComposant  = this.signalService.total;


// affectation de la valeur du signal local
// la mise a jour de la valeur est faite automatiquement
totalComputed = computed(() => this.signalService.price() * this.signalService.quantity());

// constructor() {
//   // update necessite un declenchement manuel
//   this.totalUpdate.update(() => this.signalService.quantity() * this.signalService.price());
// }


// appel des méthodes du service
addQuantityC(){
  this.signalService.addQuantity()

  // pour forcer la mise a jour du signal local il faut utiliser update lors d'un evenement
  // this.totalUpdate.update(() => this.signalService.quantity() * this.signalService.price());
}

// appel des méthodes du service
removeQuantityC(){
  this.signalService.removeQuantity()
}


// --------------------------------------------------------------

// signal Private dans le service 

signalComponent = signal<number>(0)


// constructor() {
//   this.signalComponent = this.signalService.getSignalPrivate();
// }

updateSignalPrivate(){
  this.signalComponent = this.signalService.getSignalPrivate();
  this.signalService.setSignalPrivate(5)
}

// -----------------------------------------------------------------

users : User[] = [
  {id:1, email:'Alice', password : 'test1234',isAdmin:true,age:30},
  {id:2, email:'Bob', password : 'test1234',isAdmin:false,age:25},
  {id:3, email:'Charlie', password : 'test1234',isAdmin:false,age:35}
]

signalUsers = signal<User[]>(this.users)

// --------------------------------------------------------------

// Subject

mySubjectComponent : string = 'composant';

constructor(){

  // pour consommer le Subject on doit s'abonner
  this.signalService.messageSubject.subscribe({
    // pour recupere la valeur emise avec le next ( dans le service )
    next : (value) => { 
    this.mySubjectComponent = value;
    },
    // recuperation des erreurs
    error : (error) => {

    },
    // recuperation de la fin du flux
    complete : () => {

    }
    
  })
}

updateValue(){
  this.signalService.updateValue();
}
}
