import { Injectable, signal } from '@angular/core';
import { User } from '../../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  // declaration d'un signal pour permettre de transmettre l'information en temps réel
isLoggedSignalService = signal<boolean>(false);

// declaration d'un signal pour verifier le role de l'utilisateur
isAdminSignalService = signal<boolean>(false);

constructor() {
// verification des valeurs dans le localstorage en cas de rechargement de la page
  const role = localStorage.getItem('role');
// si j'ai un role dans le localstorage je met à jour le signal
  if(role){
    this.isLoggedSignalService.set(true);

    if(role === 'admin'){
      this.isAdminSignalService.set(true);
    }
  }


 }


// LocalStorage permet de faire perdurer une donnée même après le rechargement de la page
demoStorage(token : string){
  // creer quelque chose dans le localstorage ( utilise les clés valeurs)
  localStorage.setItem('name','Angular');

  // lire quelque chose dans le localstorage
  const name = localStorage.getItem('name');

  // supprimer quelque chose dans le localstorage
  localStorage.removeItem('name');

  // vider le localstorage
  localStorage.clear();
}

// SessionStorage permet de faire perdurer une donnée seulement pendant la session ( jusqu'au fermeture de l'onglet)
demoSession(){
  // creer quelque chose dans le sessionstorage ( utilise les clés valeurs)
  sessionStorage.setItem('name','Angular');

  // lire quelque chose dans le sessionstorage
  const name = sessionStorage.getItem('name');

  // supprimer quelque chose dans le sessionstorage
  sessionStorage.removeItem('name');

  // vider le sessionstorage
  sessionStorage.clear();
}

// donnée pour simuler une base de donnée
users : User[] = [
  {
    id : 1,
    email : 'admin',
    password : 'admin',
    age : 30,
    isAdmin : true,
  },
  {
    id : 2,
    email : 'user',
    password : 'user',
    age : 25,
    isAdmin : false,
  }
]

// verification en fonction des données dans le service
login(email : string, password : string){
  // recuperation de l'utilisateur dans la liste des utilisateurs
const user = this.users.find(u => u.email === email);

// si j'ai un utilisateur et que le mot de passe est correct
if(user && user.password === password){
  // mettre à jour le signal quand l'utilisateur se connecte
  
  this.isLoggedSignalService.set(true);
  // si l'utilisateur est admin je stocke son role 'admin' dans le localstorage

if(user.isAdmin){
  // ajout d'information dans le localstorage quand l'utilisateur se connecte
  localStorage.setItem('role','admin');
  sessionStorage.setItem('role','admin');
  this.isAdminSignalService.set(true);


}else{
  // si l'utilisateur n'est pas admin je stocke son role 'user' dans le localstorage
  localStorage.setItem('role','user');
  sessionStorage.setItem('role','user');
}
}


}

register(){

}

logout(){
  // suppression des informations dans le localstorage quand l'utilisateur se deconnecte
localStorage.removeItem('role');
sessionStorage.removeItem('role');

// remettre les signaux à false quand l'utilisateur se deconnecte
this.isLoggedSignalService.set(false);
this.isAdminSignalService.set(false);
}

}
