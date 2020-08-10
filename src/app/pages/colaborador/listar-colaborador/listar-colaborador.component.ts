import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { SharedUtil } from '../../../shared/utils/shared-util';
import { SetorModel } from '../../setor/shared/setor-model';
import { SetorService } from '../../setor/shared/setor-services.service';
import { ColaboradorModel } from '../shared/colaborador-model';
import { ColaboradorService } from '../shared/colaborador-services.service';

@Component({
  selector: 'app-listar-colaborador',
  templateUrl: './listar-colaborador.component.html',
  styleUrls: ['./listar-colaborador.component.css']
})
export class ListarColaboradorComponent implements OnInit {


  cols: any[];
  botoesDesabilitado: boolean = true;
  colaboradores: ColaboradorModel[] = [];
  colaborador: ColaboradorModel;
  setores: SetorModel[] = [];

  setorSelecionado: number;

  @ViewChild('setorSel') setorSel: ElementRef = null;
  constructor(
    private colaboradorServices: ColaboradorService,
    private setorService: SetorService,
    private sharedUtil: SharedUtil
  ) { }

  ngOnInit() {
    this.colaborador = new ColaboradorModel();

    this.cols = [
      { field: 'id', header: 'Código' },
      { field: 'nome', header: 'Nome' },
      { field: 'telefone', header: 'Telefone' },
      { field: 'email', header: 'e-Mail' },
      { field: 'dataNascimento', header: 'Data de Nascimento' },
      { field: 'nomeSetor', header: 'Departamento' },
    ];

    this.getSetores();
  }

  public getColaboradores(idSetor: number) {
    this.colaboradorServices.findColaboradoresByIdSetor(idSetor).subscribe(lista => {
      this.colaboradores = lista;
      console.log(this.colaboradores);
    }, error => {

    });
  }


  public getSetores() {
    this.setorService.getAll().subscribe(lista => {
      this.setores = lista;
    }, error => { });
  }

  public getSetorSelecionado() {
    if (this.setorSel.nativeElement.selectedIndex >= 1) {
      this.getColaboradores(this.setorSel.nativeElement.selectedIndex);
    } else {
      this.sharedUtil.getMsgError("", "Selecione um Setor valido para realizar sua pesquisa");
      throw "Selecione um Setor valido para realizar sua pesquisa";
    }
  }

  public deleteColaborador(obj: ColaboradorModel) {
    const mustDelete = confirm('Deseja realmente excluir este Colaborador ?');

    if (mustDelete) {
      this.colaboradorServices.delete(obj.id).subscribe(
        () => this.colaboradores = this.colaboradores.filter(element => element != obj),
        () => this.sharedUtil.getMsgError("", `Error ao tentar excluir o colaborador ${obj.nome}`)
      );
    }
  }


}
