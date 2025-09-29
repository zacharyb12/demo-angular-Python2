import { Component, inject } from '@angular/core';
import { HttpReq } from '../../../../core/services/httpRequest/http-req';

@Component({
  selector: 'app-http-request',
  imports: [],
  templateUrl: './http-request.html',
  styleUrl: './http-request.css'
})
export class HttpRequest {

value : string = '';

  private readonly httpService = inject(HttpReq)

  getPicture(){
    this.httpService.getPicture().subscribe({
      next : (response) => {
      this.value = response.message;
      },
      error : (error) => {
        console.log(error);
        
      },complete : () => {
        console.log('complete');
      }
    })
  }
}
