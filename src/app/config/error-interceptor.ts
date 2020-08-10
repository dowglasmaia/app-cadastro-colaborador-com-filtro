import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SharedUtil } from '../shared/utils/shared-util';

@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private sharedUtil: SharedUtil
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req)
      .pipe(
        catchError(error => {
          if (!error.status) {
            error = JSON.parse(error);
          }

          switch (error.status) {
            case 400:
              this.sharedUtil.getMsgError(error.error.error, error.error.message);
              break;

            case 422:
              error.error.erros.forEach(element => {
                this.sharedUtil.getMsgError422(error.error.message, element.message);
              });

              break;
            case 404:
              this.sharedUtil.getMsgError("Atenção", "Recurso do Servidor não encontrado, entre em contato com suporte de TI.");
              break;

            case 500:
              this.sharedUtil.getMsgError(error.error.error, error.error.message);
              break;

          }
          return throwError(error.error.message);
        })) as any;
  }

}

export const ErrorInterceptorProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorInterceptor,
  multi: true,
};