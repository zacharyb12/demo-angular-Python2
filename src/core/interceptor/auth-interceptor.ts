import { HttpInterceptorFn } from '@angular/common/http';

// Creation d'un interceptor : ng g interceptor "nom de l'interceptor"

export const authInterceptor: HttpInterceptorFn = (req, next) => {

  const token = localStorage.getItem('token');

  if(token){
    const clonedReq = req.clone({
      setHeaders : {
        Authorization : `Bearer ${token}`
      }
    })
    return next(clonedReq);
  }

  return next(req);
};
