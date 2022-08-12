import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreFacePage } from './pre-face.page';

const routes: Routes = [
  {
    path: '',
    component: PreFacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreFacePageRoutingModule {}
