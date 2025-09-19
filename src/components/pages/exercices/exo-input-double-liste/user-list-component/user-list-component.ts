import { Component, input, output} from '@angular/core';
import { ProductDoubleList } from '../../../../../models/product-double-list.model';

@Component({
  selector: 'user-list',
  imports: [],
  templateUrl: './user-list-component.html',
  styleUrl: './user-list-component.css'
})
export class UserListComponent {

listProductUser = input.required<ProductDoubleList[]>();

incrementEmitter = output<number>();
decrementEmitter = output<number>();
removeEmitter = output<number>();

incrementQuantity(id : number){
this.incrementEmitter.emit(id);
}

decrementQuantity(id : number){
this.decrementEmitter.emit(id);
}

removeProduct(id : number){
  this.removeEmitter.emit(id);
}
}
