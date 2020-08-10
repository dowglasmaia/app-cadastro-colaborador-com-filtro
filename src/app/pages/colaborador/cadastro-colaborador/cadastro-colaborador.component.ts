import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SetorModel } from '../../setor/shared/setor-model';
import { SetorService } from '../../setor/shared/setor-services.service';
import { ColaboradorModel } from '../shared/colaborador-model';
import { ColaboradorService } from '../shared/colaborador-services.service';

import { SharedUtil } from '../../../shared/utils/shared-util';



@Component({
  selector: 'app-cadastro-colaborador',
  templateUrl: './cadastro-colaborador.component.html',
  styleUrls: ['./cadastro-colaborador.component.css']
})
export class CadastroColaboradorComponent implements OnInit {

  formGroup: FormGroup;
  colaborador: ColaboradorModel;
  botoesDesabilitado: boolean = true;
  setores: SetorModel[] = [];

  @ViewChild('setor') setor: ElementRef = null;

  constructor(
    private colaboradorService: ColaboradorService,
    private frmBuilder: FormBuilder,
    private router: Router,
    private setorService: SetorService,
    private sharedUtil: SharedUtil
  ) { }

  ngOnInit() {
    this.colaborador = new ColaboradorModel();

    this.formGroup = this.frmBuilder.group({
      'id': [null],
      'nome': ['', [Validators.required]],
      'cpf': ['', [Validators.required]],
      'email': ['', [Validators.required]],
      'telefone': ['', [Validators.required]],
      'dataNascimento': [null, [Validators.required]],

    });

    this.getSetores();

  }

  salvar() {
    this.colaboradorService.save(this.colaborador).subscribe(obj => {
      this.colaborador = obj;

      this.sharedUtil.getMsgSuccess("Colaborador Salvo com Sucesso.", "")

      this.router.navigate(['/dashboard']);
    }, error => {

    });
  }

  public getSetores() {
    this.setorService.getAll().subscribe(lista => {
      this.setores = lista.sort((a, b) => a.id - b.id);

      console.log(this.setores);

    }, error => { });
  }

  onSubmit(value) {
    this.colaborador = value as ColaboradorModel;
    this.colaborador.idSetor = this.setor.nativeElement.selectedIndex;
    this.salvar();

  }



}
