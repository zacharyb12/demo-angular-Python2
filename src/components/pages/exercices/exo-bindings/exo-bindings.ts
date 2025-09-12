import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-exo-bindings',
  imports: [FormsModule],
  templateUrl: './exo-bindings.html',
  styleUrl: './exo-bindings.css'
})
export class ExoBindings {

maVariableString : string = 'hello';


interval : any | null = null;


changeValue(){
  this.maVariableString = 'new value';

  this.interval = setInterval(()=> {
    this.maVariableString =  Math.random().toString();
  },1000)
} 

stop(){
  if(this.interval !== null){
    clearInterval(this.interval);
  }
}




}
