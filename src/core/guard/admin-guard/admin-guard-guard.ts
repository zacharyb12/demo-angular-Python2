import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const adminGuardGuard: CanActivateFn = (route, state) => {
  // recuperation d'une valeur dans le localstorage
 const role = localStorage.getItem('role')
 const router = inject(Router)

 // si j'ai un role et que ce role est admin je laisse passer l'utilisateur
 if(role === 'admin'){
  return true;
 }

  // sinon je le redirige vers la page d'accueil
 router.navigate(['/']);
 return false;
};
