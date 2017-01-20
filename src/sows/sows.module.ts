import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule }  from '@angular/common';
import { MaterialModule } from "@angular/material";

import { QuSquaredModule } from '../../quSquared';

import { SowsRoutes } from './sows.routes';

import { SowsService } from './sows.svc';
import { DocUploaderService } from '../doc-uploader/doc-uploader.svc';
import { UserService } from '../firebase-service/user.svc';

import { SowsComponent } from './sows.comp';
import { SowDetailsComponent } from './sow-details/sow-details.comp';
import { SowCommentsComponent } from './sow-comments/sow-comments.comp'
import { SowDocsComponent } from './sow-docs/sow-docs.comp';
import { ConfirmDialogComponent } from './sow-details/confirm-dialog.comp';
import { SowActivitiesComponent } from './sow-activities/sow-activities.comp';

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
	ConfirmDialogComponent,
	SowActivitiesComponent
    ],
    entryComponents: [ConfirmDialogComponent],
    providers: [SowsService, DocUploaderService]
})
export class SowsModule { }
