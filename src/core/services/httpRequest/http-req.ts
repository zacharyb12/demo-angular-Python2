import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ResponseDog } from '../../../models/responseDog.model';

@Injectable({
  providedIn: 'root'
})
export class HttpReq {
  
  // injection du HttpClient necessite d'ajouter le provider dans le app.config.ts
private readonly httpClient = inject(HttpClient);

// url de l'api
private url = 'https://dog.ceo/api/breeds/image/'

// methode pour faire la requete
getPicture(){
  return this.httpClient.get<ResponseDog>(this.url + 'random');
}



}
