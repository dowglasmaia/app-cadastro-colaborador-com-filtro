import { Injectable, Injector } from '@angular/core';
import { ResourceBaseServiceService } from '../../../shared/services/resource-base-service.service';
import { Colaborador } from './colaborador';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ColaboradorService extends ResourceBaseServiceService<Colaborador>{

  constructor(protected injector: Injector) {
    super("colaboradores", injector);
  }

  public findColaboradoresByIdSetor(idSetor:number): Observable<Colaborador[]> {
    return this.http.get<Colaborador[]>(`${environment.url_api}/${this.apiPath}/setor/${idSetor}`);
  }


  public findColaboradorByCpf(cpf:string): Observable<Colaborador> {
    return this.http.get<Colaborador>(`${environment.url_api}/${this.apiPath}?cpf=${cpf}`);
  }


}
