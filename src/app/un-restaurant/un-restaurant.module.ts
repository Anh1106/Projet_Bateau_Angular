import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UnRestaurantPageRoutingModule } from './un-restaurant-routing.module';

import { UnRestaurantPage } from './un-restaurant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UnRestaurantPageRoutingModule
  ],
  declarations: [UnRestaurantPage]
})
export class UnRestaurantPageModule {}
