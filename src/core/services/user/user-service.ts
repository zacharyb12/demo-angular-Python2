import { Injectable } from '@angular/core';
import { User } from '../../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
user : User[] = [
  {
    id: 1,
    email: 'john.doe@example.com',
    password: 'password123',
    age: 30,
    isAdmin: false
  },
  {
    id: 2,
    email: 'jane.doe@example.com',
    password: 'securepassword',
    age: 25,
    isAdmin: true
  },
]  


getUsers() : User[] {
  return this.user;
}

getUserById(id: number) : User | undefined {
return this.user.find(user => user.id === id);
}

}
