import { computed, Injectable, signal } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignalService {
  
// -------------------------------------------------------------------
// création d'un signal simple
counter = signal(0);

// méthodes pour modifier le signal
increment(){
  this.counter.set(this.counter() + 1);
}

decrement(){
  this.counter.set(this.counter() - 1);
}
// -------------------------------------------------------------------

price = signal<number>(100)
quantity = signal<number>(1)

total = computed(() => this.price() * this.quantity())

addQuantity(){
  
  this.quantity.set(this.quantity() + 1);
}

removeQuantity(){

  this.quantity.set(this.quantity() - 1);
}


// -------------------------------------------------------------------

private signalPrivate = signal<number>(0)

getSignalPrivate(){
  return this.signalPrivate;
}


getSignalPrivateValue(){
  return this.signalPrivate();
}

setSignalPrivate(value : number){
      this.signalPrivate.set(value);
}


// -------------------------------------------------------------------


// Ancienne version Avec Les Subjects

// creation d'un Subject 
messageSubject = new Subject<string>();

// on devait gerer les abonnements et desabonnements et envoie de valeurs
updateValue(){

  // au niveau du service on gere l'envoie de la valeur avec le next 
  this.messageSubject.next("Bonjour depuis le service");

  // on pouvait aussi clore le subject avec complete
  this.messageSubject.complete();
}


}
