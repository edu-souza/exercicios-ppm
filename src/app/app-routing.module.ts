import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'exercicio1',
    loadChildren: () => import('./exercicio1/exercicio1.module').then( m => m.Exercicio1PageModule)
  },
  {
    path: 'exercicio2',
    loadChildren: () => import('./exercicio2/exercicio2.module').then( m => m.Exercicio2PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
