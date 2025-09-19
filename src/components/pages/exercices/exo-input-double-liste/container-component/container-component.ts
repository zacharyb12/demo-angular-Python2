import { Component } from '@angular/core';
import { ProductListComponent } from "../product-list-component/product-list-component";
import { UserListComponent } from "../user-list-component/user-list-component";

@Component({
  selector: 'app-container-component',
  imports: [ProductListComponent, UserListComponent],
  templateUrl: './container-component.html',
  styleUrl: './container-component.css'
})
export class ContainerComponent {

}
