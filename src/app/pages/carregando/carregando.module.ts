import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarregandoPageRoutingModule } from './carregando-routing.module';

import { CarregandoPage } from './carregando.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarregandoPageRoutingModule
  ],
  declarations: [CarregandoPage]
})
export class CarregandoPageModule {}
