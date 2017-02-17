import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule }  from '@angular/common';

import { QuSquaredModule } from '../../quSquared';

import { ClientsRoutes } from './clients.routes';
import { ClientsComponent } from './clients.comp';

@NgModule({
  imports: [
    CommonModule,
		FormsModule,
		ClientsRoutes,
		QuSquaredModule
  ],
  declarations: [
	ClientsComponent
  ]
})
export class ClientsModule { }