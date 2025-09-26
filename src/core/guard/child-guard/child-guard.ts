import { CanActivateChildFn } from '@angular/router';

export const childGuard: CanActivateChildFn = (childRoute, state) => {
  const role = localStorage.getItem('role');


  if(role && role === 'admin'){
    return true;
  }
  alert('Vous n\'avez pas les droits pour accéder à cette page');
  return false;
};
