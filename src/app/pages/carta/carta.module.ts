import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartaPageRoutingModule } from './carta-routing.module';

import { CartaPage } from './carta.page';
import { NivelComponent } from 'src/app/components/nivel/nivel.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartaPageRoutingModule,
  ],
  declarations: [
    CartaPage,
    NivelComponent,
  ]
})
export class CartaPageModule {}
