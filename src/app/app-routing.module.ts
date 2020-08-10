import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Error404Component } from './pages/error404/error404.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },

  {
    path: 'dashboard',
    loadChildren: './pages/dashboard/dashboard.module#DashboardModule'
    //loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule),

  },

  {
    path: 'colaborador',
    loadChildren: './pages/colaborador/colaborador.module#ColaboradorModule'
    //loadChildren: () => import('./pages/colaborador/colaborador.module').then(m => m.ColaboradorModule),

  },

  {
    path: '**',
    component: Error404Component
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
