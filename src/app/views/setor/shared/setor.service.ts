import { Injectable, Injector } from '@angular/core';
import { ResourceBaseServiceService } from '../../../shared/services/resource-base-service.service';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Setor } from './setor';


@Injectable({
  providedIn: 'root'
})
export class SetorService extends ResourceBaseServiceService<Setor>{

  constructor(protected injector: Injector) {
    super("setores", injector);
  }



}
