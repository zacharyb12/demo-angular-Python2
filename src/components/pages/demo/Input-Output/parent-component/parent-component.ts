import { Component } from '@angular/core';
import { EnfantComponent } from '../enfant-component/enfant-component';

@Component({
  selector: 'app-parent-component',
  imports: [
    EnfantComponent
  ],
  templateUrl: './parent-component.html',
  styleUrl: './parent-component.css'
})
export class ParentComponent {

  title : string = "Je suis le parent";

}
