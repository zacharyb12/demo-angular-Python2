import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../../../../models/todo.model';

@Component({
  selector: 'app-exo-input-bindings-enfant',
  imports: [],
  templateUrl: './exo-input-bindings-enfant.html',
  styleUrl: './exo-input-bindings-enfant.css'
})
export class ExoInputBindingsEnfant {

  // Decorateur qui permet de recevoir une valeur du parent
@Input() listTodo : Todo[] = [];

// Decorateur qui permet d'emmettre une valeur au parent
@Output() emmeteur : EventEmitter<number> = new EventEmitter<number>();

@Output() emmeteurStatus : EventEmitter<number> = new EventEmitter<number>();


removeTodoEnfant(id : number){
  // Emission de l'evenement au parent
this.emmeteur.emit(id);
}

changeStatus(id : number){
this.emmeteurStatus.emit(id);
}

}
