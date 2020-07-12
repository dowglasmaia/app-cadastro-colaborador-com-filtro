import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { UteisShared } from './util';
import { StorageServices } from '../services/storage.service';



@Injectable({
    providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {

    constructor(
        private storage: StorageServices,
        private router: Router,
        private global: UteisShared) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req)
            .pipe(
                catchError(error => {
                    let errorObj = error;

                    if (errorObj.error) {
                        errorObj = errorObj.error;
                    }

                    if (!error.status) {
                        error = JSON.parse(error);
                    }

                    switch (errorObj.status) {
                        case 403:
                            this.handle403(errorObj)
                            break;

                        case 401:
                            this.handle401(errorObj);
                            break;

                        case 500:
                            this.handle500(errorObj);
                            break;

                        case 404:
                            //this.router.navigate(['/nao-encontrado'])
                            this.handle404(errorObj)
                            break;

                        case 400:
                            this.global.getMessage(this.global.error, 'Operação Inválida',
                                'Operação não realizada, se persistir o error contate o Dep. de TI')
                            break;

                        default:
                            this.handleDefaultEror(errorObj);
                    }

                    return throwError(errorObj);
                })) as any;
    }

    handleDefaultEror(errorObj) {
        this.global.getMessage(this.global.error, 'Erro ' + errorObj.status + ': ' + errorObj.message, '',
        );
    }

    handle401(errorObj) {
        this.global.getMessage(this.global.error, errorObj.error + ':\n' + errorObj.message,
            '')

    }

    handle404(errorObj) {
        this.global.getMessage(this.global.error, errorObj.error + '\n' + errorObj.message,
            '')

    }


    handle403(errorObj) {
        this.global.getMessage(this.global.error, 'Acesso Negado :\n ' + errorObj.status, 'Verifique suas credenciais de acesso!',
        );
    }

    handle500(errorObj) {
        this.global.getMessage(this.global.error, 'Error Interno do Servidor - \n: ', 'Operação não realizada'
        );
    }


}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};