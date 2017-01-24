import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule }  from '@angular/common';
import { MaterialModule } from "@angular/material";

import { QuSquaredModule } from '../../quSquared';

import { SowRoutes } from './sow.routes';

import { SowsService } from '../sows/sows.svc';
import { DocUploaderService } from '../doc-uploader/doc-uploader.svc';
import { UserService } from '../firebase-service/user.svc';

import {SowComponent } from './sow.comp';

@NgModule({
    imports: [
	CommonModule,
	FormsModule,
	SowRoutes,
	QuSquaredModule,
	MaterialModule
    ],
    declarations: [
	SowComponent
    ],
    providers: [SowsService, DocUploaderService]
})
export class SowModule { }