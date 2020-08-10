import { BaseResourceModel } from '../models/base-resource.model';

import { Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

/**@author Dowglas Maia 
 * @default Class Gerenerica de Serviços
 */

export abstract class BaseResourceService<T extends BaseResourceModel>{

  protected http: HttpClient;

  constructor(
    protected apiPath: string,
    protected injector: Injector,
  ) {
    this.http = injector.get(HttpClient);
  }

  public getAll(): Observable<T[]> {
    return this.http.get<T[]>(`${environment.url_api}/${this.apiPath}`);
  }

  public save(obj: T): Observable<T> {
    return this.http.post<T>(`${environment.url_api}/${this.apiPath}`, obj, environment.httpOptions);
  }

  public getById(id: number): Observable<T> {
    return this.http.get<T>(`${environment.url_api}/${this.apiPath}/${id}`);    
  }

  public delete(id: number): Observable<T> {
    const url = `${environment.url_api}/${this.apiPath}/${id}`;
    return this.http.delete<T>(url)
    .pipe( map(() => null));
  } 

}