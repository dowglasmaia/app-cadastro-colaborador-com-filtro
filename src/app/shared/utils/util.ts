import { Injectable } from '@angular/core';
import { Message } from 'primeng/api';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UteisShared {

  constructor(private router: Router) { }



  /* Messagem do primeNG */
  msgs: Message[] = [];

  /* Tipo de Errors  - https://www.primefaces.org/primeng/#/messages */
  success = 'success';
  info = 'info';
  warn = 'warn';
  error = 'error';

  getMessage(tipo: string, titulo: string, menssage: string) {
    this.msgs = [{ severity: tipo, summary: titulo, detail: menssage }];
  }


}
