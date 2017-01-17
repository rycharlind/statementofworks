import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule }  from '@angular/common';
import { MaterialModule } from "@angular/material";

import { QuSquaredModule } from '../../quSquared';

import { SowsRoutes } from './sows.routes';
import { SowsComponent } from './sows.comp';
import { SowDetailsComponent } from './sow-details/sow-details.comp';
import { SowCommentsComponent } from './sow-comments/sow-comments.comp'
import { SowDocsComponent } from './sow-docs/sow-docs.comp';
import { SowsService } from './sows.svc';
<<<<<<< HEAD
import { DocUploaderService } from '../doc-uploader/doc-uploader.svc';
=======
>>>>>>> 3d2eb768c9c452a61c18876faf70131644c88a72
import {ConfirmDialogComponent} from './sow-details/confirm-dialog.comp';

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
    SowCommentsComponent,
    SowDocsComponent,
    ConfirmDialogComponent
  ],
  entryComponents: [ConfirmDialogComponent],
<<<<<<< HEAD
  providers: [SowsService, DocUploaderService]
=======
    providers: [SowsService]
>>>>>>> 3d2eb768c9c452a61c18876faf70131644c88a72
})
export class SowsModule { }
