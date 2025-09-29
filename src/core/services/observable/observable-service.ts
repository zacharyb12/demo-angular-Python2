import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ObservableService {
 
private readonly http = inject(HttpClient);

  getProducts(){
    return this.http.get<string[]>('https://fakestoreapi.com/products');
    // return this.http.get<string[]>('https://fakestoreapi.com/products').pipe( map ( (data : string[]) => data.map( (item) => item.length > 0 ) ) );
  }


  getCounter() : Observable<number>{

    return new Observable<number>((observer) => {
      let counter = 0;

      setInterval(() => {

        observer.next(counter);

        counter++;
      },2000)
    })



  }


}
