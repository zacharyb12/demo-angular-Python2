import { Injectable, signal } from '@angular/core';
import { User } from '../../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
// LocalStorage permet de faire perdurer une donnée même après le rechargement de la page
demoStorage(){
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

// declaration de signal typé boolean
isLoggedSignalS = signal<boolean>(false);
isAdminS = signal<boolean>(false);


constructor(){
// verification en cas de rechargement de la page pour le role
const role = localStorage.getItem('role');
if(role === 'admin'){
  this.isAdminS.set(true);
}

// verification en cas de rechargement de la page pour l'etat de connection
    const token = localStorage.getItem('token');
  if(token){
    this.isLoggedSignalS.set(true);
  }
}


  Login(email : string, password : string){
    
  const user = this.users.find(u => u.email === email);
  if(user?.password === password){
// Si la connection est validé on peut modifier les valeurs du signal isLoggedSignalS
// et dans le  localstorage on ajoute un token
    this.isLoggedSignalS.set(true);
    localStorage.setItem('token','logged');

  if(user.isAdmin){
    // si l'utilisateur est admin on modifie le signal isAdminS
    // et on ajoute dans le localstorage le role
    this.isAdminS.set(true);
    localStorage.setItem('role','admin');
    

}else{
  // si l'utilisateur n'est pas admin on enregistre juste le role user dans le localstorage
  localStorage.setItem('role','user');
}


  }

  }
  

  Register(){

  }


  logout(){

    // pour la deconnection on supprime le token et le role du localstorage
    localStorage.removeItem('role');
    localStorage.removeItem('token');

    // on remet les signaux à false
    this.isLoggedSignalS.set(false);
    this.isAdminS.set(false);
  }

}
