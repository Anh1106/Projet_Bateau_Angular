import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnBateauPageRoutingModule } from './un-bateau-routing.module';

import { UnBateauPage } from './un-bateau.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnBateauPageRoutingModule
  ],
  declarations: [UnBateauPage]
})
export class UnBateauPageModule {}
