import { BaseResourceModel } from '../../../shared/models/base-resource.model';

export class ColaboradorModel extends BaseResourceModel {

  constructor(
    public nome?: string,
    public cpf?: string,
    public email?: string,
    public telefone?: string,
    public dataNascimento?: Date,
    public idSetor?: number,
    public nomeSetor?: string
  ) {
    super();
  }
}