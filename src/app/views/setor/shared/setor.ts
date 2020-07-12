import { ResourceBaseModel } from '../../../shared/model/resource-base.model';

export class Setor extends ResourceBaseModel {

  constructor(
    public descricao?: string,
    
  ){
    super();
  }
}


