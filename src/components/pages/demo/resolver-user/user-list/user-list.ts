import { Component, inject } from '@angular/core';
import { UserService } from '../../../../../core/services/user/user-service';
import { User } from '../../../../../models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList {

users : User[] = [];

private readonly userService = inject(UserService)
private readonly router = inject(Router)

constructor(){
  this.getUsers();
}

getUsers(){
  this.users = this.userService.getUsers();
}


navigateToDetails(id: number){
  this.router.navigate(['/demo/resolver-details', id]);
}
}
