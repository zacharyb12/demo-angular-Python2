import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  
// valeur qui permet d'informer si le formulaire a été modifié
formGroupDirty = signal(false);


// methode pour changer la valeur du signal
changeSignal(){
  this.formGroupDirty.set(true);
}

}
