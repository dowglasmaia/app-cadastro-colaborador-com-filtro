import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroColaboradorComponent } from './cadastro-colaborador/cadastro-colaborador.component';
import { ListarColaboradorComponent } from './listar-colaborador/listar-colaborador.component';

const routes: Routes = [
  { path: '', redirectTo: 'cadastro', pathMatch: 'full' },

  {
    path: 'cadastro',
    component: CadastroColaboradorComponent,
  },

  {
    path: 'lista', component: ListarColaboradorComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ColaboradorRoutingModule { }
