import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { StorageServices } from './../services/storage.service';

/* 
Class Responsavel por enviar o token nas requisições
*/

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

    constructor(private storange: StorageServices) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let localUser = this.storange.getLocalUser();

        let N = environment.url_api.length;

        let requestToAPI = req.url.substring(0,N) == environment.url_api;

        /*se o localuser não estiver null, fazendo um clone da requisição e add o cabeçalho na mesma */
        if (localUser && requestToAPI) {
            const authReq = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + localUser.token) });
            return next.handle(authReq);
        } else {
            return next.handle(req);
        }



    }


}




export const AuthInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
};