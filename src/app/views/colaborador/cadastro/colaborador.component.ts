import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { Colaborador } from '../shared/colaborador';
import { ColaboradorService } from '../shared/colaborador.service';
import { Setor } from '../../setor/shared/setor';
import { SetorService } from '../../setor/shared/setor.service';


@Component({
  selector: 'app-colaborador',
  templateUrl: './colaborador.component.html'
})
export class ColaboradorComponent implements OnInit {

  edicao: boolean = false;
  novo: boolean = true;

  formGroup: FormGroup;

  colaboradores: Colaborador[];
  colaborador: Colaborador;
  colaboradorSelecionado: Colaborador;
  botoesDesabilitado: boolean = true;


  setores: Setor[] = [];

  setorSelecionado: number;

  //pegando o valor da variavel declarada no templet HTML, com ViewChild
  @ViewChild('setor') setor: ElementRef = null;


  constructor(
    private colaboradorService: ColaboradorService,
    private frmBuilder: FormBuilder,
    private router: Router,
    private setorService: SetorService
  ) { }

  ngOnInit() {
    this.colaborador = new Colaborador();

    this.formGroup = this.frmBuilder.group({
      'id': [null],
      'nome': ['', [Validators.required]],
      'cpf': ['', [Validators.required]],
      'email': ['', [Validators.required]],
      'telefone': ['', [Validators.required]],
      'setor': ['', [Validators.required]],
    });

    this.getSetores();

  }


  onSubmit(value) {
    this.colaborador = value as Colaborador;
    if (this.colaborador.id == null) {
      this.salvar();
    }
  }

  salvar() {
    this.colaboradorService.save(this.colaborador).subscribe(obj => {
      this.colaborador = obj;
      //this.global.getMessage(this.global.success, 'Confirmação!', 'Registro Salvo com Sucesso!');
      this.router.navigate(['/colaborador/lista']);
    }, error => { });
  }

  public getSetores() {
    this.setorService.getAll().subscribe(lista => {
      this.setores = lista;
      console.log(this.setores)
    }, error => { });
  }


}
