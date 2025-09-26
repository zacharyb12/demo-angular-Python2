import { CanActivateFn } from '@angular/router';

export const adminGuardGuard: CanActivateFn = (route, state) => {
  
// permet de verifier si l'utilisateur peut aller sur une route ou pas

  // le guard retourne un boolean

const role = localStorage.getItem('role');

if(role && role === 'admin'){
  return true;
}

  return false;


};
