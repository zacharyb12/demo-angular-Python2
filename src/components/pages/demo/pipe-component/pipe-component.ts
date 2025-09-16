import { CommonModule, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { User } from '../../../../models/user.model';

@Component({
  selector: 'app-pipe-component',
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    CommonModule


  ],
  templateUrl: './pipe-component.html',
  styleUrl: './pipe-component.css'
})
export class PipeComponent {

message = "Bonjour tout le monde ! ";

myNumber = 123456.789;
myNumber2 = 56.7;

myCurrency = 2999.956;

myDate = new Date();

user : User = {
  password: 'john',
  isAdmin: true,
  age: 30,
  email: 'john.doe@example.com' 
}

}
