import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule }  from '@angular/common';

import { QuSquaredModule } from '../../quSquared';

import { SettingsRoutes } from './settings.routes';
import { SettingsComponent } from './settings.comp';
import { SettingsStepsComponent } from './settings-steps/settings-steps.comp';

@NgModule({
  imports: [
    CommonModule,
		FormsModule,
		SettingsRoutes,
		QuSquaredModule
  ],
  declarations: [
		SettingsComponent,
    SettingsStepsComponent
  ]
})
export class SettingsModule { }