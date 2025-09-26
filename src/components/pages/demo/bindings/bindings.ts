import { Component, OnDestroy, OnInit } from '@angular/core';
import { User } from '../../../../models/user.model';
import { FormsModule } from '@angular/forms';
import { ServiceExo } from '../../../../core/services/service-exo/service-exo';

@Component({
  selector: 'app-bindings',
  imports: [
FormsModule
  ],
  templateUrl: './bindings.html',
  styleUrl: './bindings.css',
})

export class Bindings implements OnInit,OnDestroy {


  users : User[] = []
  user : User = { id : 1, password: 'John Doe', email: 'john.doe@example.com', age: 30,isAdmin: false}

  // binding One-way
  value : number = 1;
  
  // binding Two-way
  message : string = "hello from home component";

  // Event-binding
  message2 : string = "";
  updateMessage(){
    this.message2 = "Mon nouveau message ! "
  }


  // Attributes-binding
  isActive : boolean = false;
  toggleValue(){
    this.isActive = !this.isActive;
  }
  
constructor(){
  console.log("home component initialized Constructeur");

  this.users.push({ id:2, password: 'John Doe', email: 'john.doe@example.com', age: 30,isAdmin: false});

}

ngOnInit(): void {
console.log("home component initialized OnInit");

}

  ngOnDestroy(): void {
    console.log("home component destroyed OnDestroy");
    
  }

}
