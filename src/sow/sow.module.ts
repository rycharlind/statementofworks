import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule }  from '@angular/common';
import { MaterialModule } from "@angular/material";

import { QuSquaredModule } from '../../quSquared';

import { SowRoutes } from './sow.routes';

import { SowService } from '../sow/sow.svc';
import { DocUploaderService } from '../doc-uploader/doc-uploader.svc';
import { UserService } from '../firebase-service/user.svc';

import { SowDetailsComponent } from './sow-details/sow-details.comp';
import { SowCommentsComponent } from './sow-comments/sow-comments.comp'
import { SowDocsComponent } from './sow-docs/sow-docs.comp';
import { SowActivitiesComponent } from './sow-activities/sow-activities.comp';

import {SowComponent } from './sow.comp';
import {ConfirmComponent} from '../confirm-service/confirm.comp';

@NgModule({
    imports: [
	CommonModule,
	FormsModule,
	SowRoutes,
	QuSquaredModule,
	MaterialModule
    ],
    declarations: [
	SowComponent,
	SowDetailsComponent,
	SowCommentsComponent,
	SowDocsComponent,
	SowActivitiesComponent,
	ConfirmComponent
    ],
    providers: [SowService, DocUploaderService]
})
export class SowModule { }