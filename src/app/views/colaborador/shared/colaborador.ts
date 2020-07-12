import { ResourceBaseModel } from '../../../shared/model/resource-base.model';
import { Setor } from '../../setor/shared/setor';

export class Colaborador extends ResourceBaseModel {

  constructor(
    public nome?: string,
    public cpf?: string,  
    public email?:string,
    public telefone?:string,
    public dataNascimento?: Date,
    public setor?: Setor,
  ){
    super();
  }
}


