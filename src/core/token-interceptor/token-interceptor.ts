import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
// l'interceptor est un middleware qui permet d'intercepter les requêtes HTTP






// renvoie la requête d'origine
  return next(req);

};
