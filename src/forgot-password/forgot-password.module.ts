// Angular Imports
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { QuSquaredModule } from '../../quSquared';

// This Module's Components
import { ForgotPasswordRoutes } from "./forgot-password.routes";
import { ForgotPasswordComponent } from './forgot-password.comp';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ForgotPasswordRoutes,
        QuSquaredModule
    ],
    declarations: [
        ForgotPasswordComponent,
    ]
})
export class ForgotPasswordModule {

}
