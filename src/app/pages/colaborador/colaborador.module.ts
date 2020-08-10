import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ColaboradorRoutingModule } from './colaborador-routing.module';
import { CadastroColaboradorComponent } from './cadastro-colaborador/cadastro-colaborador.component';
import { ListarColaboradorComponent } from './listar-colaborador/listar-colaborador.component';
import { SharedModule } from '../../shared/shared.module';
import { NgxMaskModule } from 'ngx-mask-2';

import { ToastModule } from 'primeng/toast';

@NgModule({
  declarations: [
    CadastroColaboradorComponent,
    ListarColaboradorComponent
  ],
  imports: [
    //CommonModule,
    SharedModule,
    ColaboradorRoutingModule,
    NgxMaskModule.forRoot(),
    ToastModule
  ]
})
export class ColaboradorModule { }
