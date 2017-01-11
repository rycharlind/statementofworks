import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule }  from '@angular/common';
import { MaterialModule } from "@angular/material";

import { QuSquaredModule } from '../../quSquared';

import { SowsRoutes } from './sows.routes';
import { SowsComponent } from './sows.comp';
import { SowDetailsComponent } from './sow-details/sow-details.comp';
import { SowsService } from './sows.svc';

@NgModule({
  imports: [
    CommonModule,
		FormsModule,
		SowsRoutes,
		QuSquaredModule,
    MaterialModule
  ],
  declarations: [
		SowsComponent,
    SowDetailsComponent
  ],
  providers: [SowsService]
})
export class SowsModule { }