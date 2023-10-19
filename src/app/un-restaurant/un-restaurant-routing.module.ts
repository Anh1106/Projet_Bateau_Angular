import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnRestaurantPage } from './un-restaurant.page';

const routes: Routes = [
  {
    path: '',
    component: UnRestaurantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnRestaurantPageRoutingModule {}
