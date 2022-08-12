import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreFacePageRoutingModule } from './pre-face-routing.module';

import { PreFacePage } from './pre-face.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreFacePageRoutingModule
  ],
  declarations: [PreFacePage]
})
export class PreFacePageModule {}
