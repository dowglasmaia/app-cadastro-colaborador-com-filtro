import { NgModule } from '@angular/core';
import { ColaboradorComponent } from './cadastro/colaborador.component';


import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { Colaborador } from './shared/colaborador';
import { ColaboradorDetalhesComponent } from './lista/colaborador-detalhes.component';

const routes: Routes = [
  { path: '', redirectTo: 'cadastro', pathMatch: 'full' },

  {
    path: 'cadastro',
    component: ColaboradorComponent,
    data: {
      title: 'Colaborador / Novo'
    },
  },

  {
    path: 'lista', component: ColaboradorDetalhesComponent,
    data: {
      title: 'Colaborador / Lista'
    },
  },

];

@NgModule({
  declarations: [
    ColaboradorComponent,
    ColaboradorDetalhesComponent,
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ColaboradorModule { }
