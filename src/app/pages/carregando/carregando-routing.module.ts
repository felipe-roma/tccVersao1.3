import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CarregandoPage } from './carregando.page';

const routes: Routes = [
  {
    path: '',
    component: CarregandoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarregandoPageRoutingModule {}
