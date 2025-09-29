import { Component, inject } from '@angular/core';
import { HttpReq } from '../../../../core/services/httpRequest/http-req';

@Component({
  selector: 'app-http-request',
  imports: [],
  templateUrl: './http-request.html',
  styleUrl: './http-request.css'
})
export class HttpRequest {

  // variable pour stocker l'url de l'image
value : string = '';

// injection du service
  private readonly httpService = inject(HttpReq)


  // methode pour faire la requete
  getPicture(){
    this.httpService.getPicture().subscribe({
      next : (response) => {
        // recuperation de la valeur avec next
      this.value = response.message;
      },
      error : (error) => {
        // En cas d'erreur on log l'erreur
        console.log(error);
        
      },complete : () => {
        // quand l'observable est complete on log complete
        console.log('complete');
      }
    })
  }
}
