import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule }  from '@angular/common';

import { QuSquaredModule } from '../../quSquared';

import { SowsRoutes } from './sows.routes';
import { SowsComponent } from './sows.comp';

@NgModule({
  imports: [
    CommonModule,
		FormsModule,
		SowsRoutes,
		QuSquaredModule
  ],
  declarations: [
		SowsComponent
  ]
})
export class SowsModule { }