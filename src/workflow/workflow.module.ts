import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule }  from '@angular/common';
import { MaterialModule } from "@angular/material";

import { QuSquaredModule } from '../../quSquared';

import { WorkflowRoutes } from './workflow.routes';

import { SowsService } from '../sows/sows.svc';
import { DocUploaderService } from '../doc-uploader/doc-uploader.svc';
import { UserService } from '../firebase-service/user.svc';

import { WorkflowComponent } from './workflow.comp';

@NgModule({
    imports: [
	CommonModule,
	FormsModule,
	WorkflowRoutes,
	QuSquaredModule,
	MaterialModule
    ],
    declarations: [
	WorkflowComponent
    ],
    providers: [SowsService, DocUploaderService]
})
export class WorkflowModule { }
