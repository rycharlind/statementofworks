import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule }  from '@angular/common';
import { MaterialModule } from "@angular/material";

import { QuSquaredModule } from '../../quSquared';

import { SowsRoutes } from './sows.routes';
import { SowsComponent } from './sows.comp';
import { SowDetailsComponent } from './sow-details/sow-details.comp';
import { SowDocsComponent } from './sow-docs/sow-docs.comp';
import { SowsService } from './sows.svc';
import {ConfirmDialogComponent} from './sow-details/confirm-dialog.comp'

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
    SowDetailsComponent,
    SowDocsComponent,
    ConfirmDialogComponent
  ],
  entryComponents: [ConfirmDialogComponent],
  providers: [SowsService]
})
export class SowsModule { }