import { CanMatchFn } from '@angular/router';

export const matchGuard: CanMatchFn = (route, segments) => {
  const role = localStorage.getItem('role');


  if(role && role === 'admin'){
    return true;
  }
alert('Vous n\'avez pas les droits pour accéder à cette page');
  return false;
};
