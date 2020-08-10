
import { Injectable, Injector } from '@angular/core';
import { BaseResourceService } from '../../../shared/services/base-resource.service';
import { SetorModel } from './setor-model';

@Injectable({
  providedIn: 'root'
})
export class SetorService extends BaseResourceService<SetorModel>{

  constructor(protected injector: Injector) {
    super("api/v1/setores", injector);
  }



}