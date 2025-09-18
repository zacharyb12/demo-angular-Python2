import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../../../../../models/todo.model';

@Component({
  selector: 'app-exo-input-bindings-enfant',
  imports: [],
  templateUrl: './exo-input-bindings-enfant.html',
  styleUrl: './exo-input-bindings-enfant.css'
})
export class ExoInputBindingsEnfant {

@Input() listTodo : Todo[] = [];

@Output() emmeteur : EventEmitter<number> = new EventEmitter<number>();

@Output() emmeteurStatus : EventEmitter<number> = new EventEmitter<number>();


removeTodoEnfant(id : number){
this.emmeteur.emit(id);
}

changeStatus(id : number){
this.emmeteurStatus.emit(id);
}

}
