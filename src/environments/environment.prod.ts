import { HttpHeaders } from '@angular/common/http';

export const environment = {
  production: true,

  /* url do servidor*/
  url_api: 'https://app-colaborador.herokuapp.com',


  /* headers - Definindo o Tipo de Conteudo que é Passo no corpo da requisição*/
  httpOptions: {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
};
