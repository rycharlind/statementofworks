import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule }  from '@angular/common';

import { QuSquaredModule } from '../../quSquared';

import { ProgressIndicatorComponent } from './progress-indicator.comp';

@NgModule({
  imports: [
    CommonModule,
	  FormsModule,
	  QuSquaredModule
  ],
  declarations: [
	  ProgressIndicatorComponent
  ]
})
export class ProgressIndicatorrModule { }