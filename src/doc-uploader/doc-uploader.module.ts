import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule }  from '@angular/common';

import { QuSquaredModule } from '../../quSquared';

import { DocUploaderComponent } from './doc-uploader.comp';

@NgModule({
  imports: [
    CommonModule,
	  FormsModule,
	  QuSquaredModule
  ],
  declarations: [
	  DocUploaderComponent
  ]
})
export class DocUploaderModule { }