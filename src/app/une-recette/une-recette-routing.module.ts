import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UneRecettePage } from './une-recette.page';

const routes: Routes = [
  {
    path: '',
    component: UneRecettePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UneRecettePageRoutingModule {}
