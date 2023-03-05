import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'hiragana',
    loadChildren: () => import('./pages/hiragana/hiragana.module').then( m => m.HiraganaPageModule)
  },
  {
    path: 'carta',
    loadChildren: () => import('./pages/carta/carta.module').then( m => m.CartaPageModule)
  },
  {
    path: 'carregando',
    loadChildren: () => import('./pages/carregando/carregando.module').then( m => m.CarregandoPageModule)
  },
  {
    path: 'tutorial',
    loadChildren: () => import('./pages/tutorial/tutorial.module').then( m => m.TutorialPageModule)
  },
  {
    path: 'carta-tutorial',
    loadChildren: () => import('./pages/carta-tutorial/carta-tutorial.module').then( m => m.CartaTutorialPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
