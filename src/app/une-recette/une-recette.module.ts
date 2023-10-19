import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UneRecettePageRoutingModule } from './une-recette-routing.module';

import { UneRecettePage } from './une-recette.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UneRecettePageRoutingModule
  ],
  declarations: [UneRecettePage]
})
export class UneRecettePageModule {}
