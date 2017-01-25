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

@NgModule({
    imports: [
	CommonModule,
	FormsModule,
	SowsRoutes,
	QuSquaredModule,
	MaterialModule
    ],
    declarations: [
	SowsComponent
    ],
    providers: [SowsService, DocUploaderService]
})
export class SowsModule { }
