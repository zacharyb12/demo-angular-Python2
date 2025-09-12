import { Component } from '@angular/core';

@Component({
  selector: 'app-compteur-component',
  imports: [],
  templateUrl: './compteur-component.html',
  styleUrl: './compteur-component.css'
})
export class CompteurComponent {

  //  Variables
secondes : number = 58;
minutes : number = 59;
heures : number = 0;
interval : any | null = null;

//  Méthodes
start(){
  if(this.interval === null){
    this.interval = setInterval(() => {
      if(this.secondes === 59){
        this.secondes = 0;
        if(this.minutes === 59){
        this.minutes = 0;
        this.heures += 1;
      }
      }else{
        this.secondes += 1;
      }
    } , 1000)
  }
}

pause(){
clearInterval(this.interval);
this.interval = null;
}

reset(){
this.secondes = 0;
this.minutes = 0;
this.heures = 0;
this.pause();
}

}
