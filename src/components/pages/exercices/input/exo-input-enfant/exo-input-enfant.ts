import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-exo-input-enfant',
  imports: [],
  templateUrl: './exo-input-enfant.html',
  styleUrl: './exo-input-enfant.css'
})
export class ExoInputEnfant {

 @Input() valeurEnfant : string[] = [];
}
