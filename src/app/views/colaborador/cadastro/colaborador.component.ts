import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Colaborador } from '../shared/colaborador';
import { ColaboradorService } from '../shared/colaborador.service';


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
 

  constructor(
    private colaboradorService: ColaboradorService,
    private frmBuilder: FormBuilder,   
    private router: Router,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.colaborador = new Colaborador();
    
    this.formGroup = this.frmBuilder.group({
      'codigo': [null],
      'nome': ['', [Validators.required]],
      'email': ['', [Validators.required]],
      'cpf': ['', [Validators.required]],
      'senha': ['', [Validators.required]],
      'contato': ['', [Validators.required]],
      'cargo': ['', [Validators.required]],
      'empresa': ['', [Validators.required]]
    });
   

     if (this.router.url !== '/colaborador/novo') {   
      let codigo = this.route.snapshot.paramMap.get('codigo');
      this.colaboradorService.getById(parseInt(codigo, 0)).subscribe(obj => {
        this.colaborador = obj;

        this.edicao = true;
        this.novo = false;       

        this.formGroup.patchValue(this.colaborador);
      }, error => { });
    }
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
  

  onRowSelect(event) {
    this.botoesDesabilitado = false;
  }

  onRowUnselect(event) {
    this.botoesDesabilitado = true;
  }

}
