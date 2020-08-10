import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { BaseResourceService } from '../../../shared/services/base-resource.service';
import { ColaboradorModel } from './colaborador-model';


@Injectable({
  providedIn: 'root'
})
export class ColaboradorService extends BaseResourceService<ColaboradorModel> {

  constructor(protected injector: Injector) {
    super( "api/v1/colaboradores", injector);
  }

  public findColaboradoresByIdSetor(idSetor: number): Observable<ColaboradorModel[]> {
    return this.http.get<ColaboradorModel[]>(`${environment.url_api}/${this.apiPath}/setor/${idSetor}`);
  }


  public findColaboradorByCpf(cpf: string): Observable<ColaboradorModel> {
    return this.http.get<ColaboradorModel>(`${environment.url_api}/${this.apiPath}?cpf=${cpf}`);
  }


}