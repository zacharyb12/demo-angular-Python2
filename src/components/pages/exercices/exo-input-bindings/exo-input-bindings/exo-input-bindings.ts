import { Component } from '@angular/core';
import { User } from '../../../../../models/user.model';
import { Todo } from '../../../../../models/todo.model';
import { FormsModule } from '@angular/forms';
import { ExoInputBindingsEnfant } from "../exo-input-bindings-enfant/exo-input-bindings-enfant";

@Component({
  selector: 'app-exo-input-bindings',
  imports: [
    FormsModule,
    ExoInputBindingsEnfant
],
  templateUrl: './exo-input-bindings.html',
  styleUrl: './exo-input-bindings.css'
})
export class ExoInputBindings {

  // Valeur transmise du parent vers l'enfant
  listTodoParent : Todo[] = [];

  // Variables qui permettent de creer un objet Todo pour l'ajouter a la liste
  title : string = "";
  description : string = "";
  lastId : number = 0;

  // la methode qui permet d'ajouter un Todo a la liste
  addTodo(){
  const newTodo : Todo = {

    id : this.listTodoParent.length + 1,
    title : this.title,
    description : this.description,
    status : false,
  }

  this.listTodoParent.push(newTodo);
  
  }

  removeTodoParent(id : number){
 this.listTodoParent =  this.listTodoParent.filter(todo => todo.id !== id) 
  }

  //[]
  changeStatus(id : number){
const todoIndex = this.listTodoParent.findIndex(element => element.id === id);

this.listTodoParent[todoIndex].status = !this.listTodoParent[todoIndex].status;
  }


}