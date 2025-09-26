import { CanDeactivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { FormService } from '../../services/form-service/form-service';

export const formGuard: CanDeactivateFn<unknown> = (component, currentRoute, currentState, nextState) => {
 
// recuperation du service FormService pour savoir si le formulaire a été modifié
  const monService = inject(FormService)

  // si le formulaire a été modifié on demande une confirmation avant de quitter la page
  if(monService.formGroupDirty()){ 
    
    // on demande a l'utilisateur une confirmation avant de quitter la page
    const response = confirm('êtes vous sûr de vouloir quitter cette page ?');
    
    // le confirm renvoie true ou false
    return response;
  }else{
    return true;
  }

}
