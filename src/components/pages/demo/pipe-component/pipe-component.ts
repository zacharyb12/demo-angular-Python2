import { CommonModule, JsonPipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { User } from '../../../../models/user.model';
import { EmojiPipe } from '../../../../core/PipeCustom/pipe-emoji/emoji-pipe';
import { FormsModule } from '@angular/forms';
import { TofarheneitPipe } from '../../../../core/PipeCustom/tofahrenheitPipe/tofarheneit-pipe';
import { TocelciusPipe } from '../../../../core/PipeCustom/tocelciusPipe/tocelcius-pipe';

@Component({
  selector: 'app-pipe-component',
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    CommonModule,
    EmojiPipe,
    FormsModule,
    TofarheneitPipe,
    TocelciusPipe


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
  id: 1,
  password: 'john',
  isAdmin: true,
  age: 30,
  email: 'john.doe@example.com' 
}

texteEmoji = "J'aime mon chien et mon chat. Le soleil brille et la lune éclaire la nuit. J'adore la pizza et le chocolat. La musique me fait danser et le sport me rend heureux. Je vais à l'école en vélo et je travaille à la banque. J'aime lire des livres avec une tasse de café. La santé est importante, alors je consulte mon médecin régulièrement.";

celcius = 22;
fahrenheit = 71.6;

// Affichage d'une temperature en celcius et fahrenheit avec Binding Two-Way

// Besoin d'une variable - d'un import - des pipes
valueInputF : number = 0 ;
valueInputC : number = 0 ;
}
