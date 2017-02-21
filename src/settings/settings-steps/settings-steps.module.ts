import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule }  from '@angular/common';

import { QuSquaredModule } from '../../../quSquared';

import { SettingsStepsRoutes } from './settings-steps.routes';
import { SettingsStepsComponent } from './settings-steps.comp';

import { SettingsStepsCellComponent } from './settings-steps-cell/settings-steps-cell.comp';

@NgModule({
  imports: [
    CommonModule,
		FormsModule,
		SettingsStepsRoutes,
		QuSquaredModule
  ],
  declarations: [
    SettingsStepsComponent,
    SettingsStepsCellComponent
  ]
})
export class SettingsStepsModule { }