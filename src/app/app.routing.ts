import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Import Containers
import { DefaultLayoutComponent } from './containers';

import { P404Component } from './views/error/404.component';

export const routes: Routes = [
   
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  
  {  path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },    
    children: [       
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },    
        
       
      {
        path: 'colaborador',
        loadChildren: () => import('./views/colaborador/colaborador.module').then(m => m.ColaboradorModule)
      }, 

    ]
  },

  { path: '**', component: P404Component }

  
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
