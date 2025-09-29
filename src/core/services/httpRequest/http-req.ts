import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ResponseDog } from '../../../models/responseDog.model';

@Injectable({
  providedIn: 'root'
})
export class HttpReq {
  
private readonly httpClient = inject(HttpClient);

private url = 'https://dog.ceo/api/breeds/image/'

getPicture(){
  return this.httpClient.get<ResponseDog>(this.url + 'random');
}

getPictureById(id : number){
  return this.httpClient.get<Response>(this.url + id );
}


}
