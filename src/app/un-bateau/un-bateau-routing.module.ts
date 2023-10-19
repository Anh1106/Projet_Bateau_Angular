import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UnBateauPage } from './un-bateau.page';

const routes: Routes = [
  {
    path: '',
    component: UnBateauPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UnBateauPageRoutingModule {}
