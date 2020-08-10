import { BaseResourceModel } from '../../../shared/models/base-resource.model';

export class SetorModel extends BaseResourceModel {

  constructor(
    public descricao?: string,

  ) {
    super();
  }
}