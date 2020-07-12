import { HttpHeaders } from '@angular/common/http';
export const environment = {
  production: false,

  url_api: 'http://localhost:8080/api/v1',
  
  httpOptions: {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

};
