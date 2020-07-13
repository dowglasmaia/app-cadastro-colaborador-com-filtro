import { Location } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { UteisShared } from '../../../shared/utils/util';
import { Colaborador } from '../shared/colaborador';
import { ColaboradorService } from '../shared/colaborador.service';
import { Setor } from '../../setor/shared/setor';
import { SetorService } from '../../setor/shared/setor.service';

@Component({
  selector: 'app-colaborador-detalhes',
  templateUrl: './colaborador-detalhes.component.html'
})
export class ColaboradorDetalhesComponent implements OnInit {

  cols: any[];
  botoesDesabilitado: boolean = true;
  colaboradorSelecionado: Colaborador;
  colaboradores: Colaborador[] = [];
  colaborador: Colaborador;

  setores: Setor[] = [];
  //setor: Setor;
  setorSelecionado: number;

  //pegando o valor da variavel declarada no templet HTML, com ViewChild
  @ViewChild('setor') setor: ElementRef = null;

  constructor(
    private colaboradorServices: ColaboradorService,
    private confirmationService: ConfirmationService,
    private global: UteisShared,
    private setorService: SetorService) { }

  ngOnInit() {

    this.colaborador = new Colaborador();  

    this.cols = [
      { field: 'id', header: 'Código' },
      { field: 'nome', header: 'Nome' },
      { field: 'telefone', header: 'Telefone' },
      { field: 'email', header: 'e-Mail' },
      { field: 'dataNascimento', header: 'Data de Nascimento' },
      { field: 'setor.descricao', header: 'Setor' },
    ];

    this.getSetores();
  }


  public getColaboradores(idSetor: number) {
    this.colaboradorServices.findColaboradoresByIdSetor(idSetor).subscribe(lista => {
      this.colaboradores = lista;
      console.log(this.colaboradores)
    }, error => { });
  }


  public getSetores() {
    this.setorService.getAll().subscribe(lista => {
      this.setores = lista;
      console.log(this.setores)
    }, error => { });
  }

  public geColaboradorSelecionado() {
    return this.colaboradorSelecionado == null ? null : this.colaboradorSelecionado.id;
  }

  public getSetorSelecionado() {
    if (this.setor.nativeElement.selectedIndex >= 1) {

      this.getColaboradores(this.setor.nativeElement.selectedIndex);

      console.log(this.setor.nativeElement.selectedIndex)

    } else {
      alert(`Selecione um Setor valido para realizar sua pesquisa!`)
      // this.global.getMessage(this.global.warn, 'Atenção!', 'Selecione um Setor valido para realizar o filtro!');
      throw "Selecione um Setor valido para realizar sua pesquisa";
    }
  }


  excluir() {
    this.confirmationService.confirm({
      message: 'Desejas realmente excluir este registro?',
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      acceptLabel: 'Sim',
      rejectLabel: 'Não',

      accept: () => {
        this.colaboradorServices.delete(this.colaboradorSelecionado.id).subscribe(x => {
          //this.getColaboradores(); // atualiza a lista apos a exluisão
          this.botoesDesabilitado = true;
          this.global.getMessage(this.global.success, 'Usuário removido com Sucesso.', '');
        }, error => {
          this.global.getMessage(this.global.warn, 'Operação não Autorizada!', 'Somente o Administrador pode realizar esta Operação!');
        });
      },
      reject: () => { }
    });
  }


}
