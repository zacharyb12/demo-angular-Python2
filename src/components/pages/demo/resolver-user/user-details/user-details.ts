import { Component, inject } from '@angular/core';
import { User } from '../../../../../models/user.model';
import { UserService } from '../../../../../core/services/user/user-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css'
})
export class UserDetails {

user : User | undefined;

// Id Sans le resolver
// id : number | undefined;


// private readonly userService = inject(UserService)
private readonly activRoute = inject(ActivatedRoute)

constructor(){
  // Recuperation de l'id dans l'url
  // this.id = +this.activRoute.snapshot.params['id'];

  // Recuperation de l'utilisateur via le resolver
  this.user = this.activRoute.snapshot.data['user'];

  // Recuperation de l'utilisateur via l'id et le service
  // this.getUserSansResolver(this.id);
}

// Recuperation de l'utilisateur via le service
// getUserSansResolver(id : number){
//   this.user = this.userService.getUserById(id);
// }
}
