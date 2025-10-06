import { ResolveFn, Router } from '@angular/router';
import { UserService } from '../services/user/user-service';
import { inject } from '@angular/core';
import { User } from '../../models/user.model';

export const userResolver: ResolveFn<User | null> = (route, state) => {
  
  const id = +route.params['id'];
  const userService = inject(UserService);
  const router = inject(Router);
 

  if(id){
    const user = userService.getUserById(id);
    if(user){
        return user;
      }
  

  }
  router.navigate(['/demo/resolver-list']);
  return null;
};
