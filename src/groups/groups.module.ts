import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule }  from '@angular/common';

import { QuSquaredModule } from '../../quSquared';

import { GroupsRoutes } from './groups.routes';
import { GroupsComponent } from './groups.comp';

@NgModule({
  imports: [
    CommonModule,
		FormsModule,
		GroupsRoutes,
		QuSquaredModule
  ],
  declarations: [
	GroupsComponent
  ]
})
export class ClientsModule { }