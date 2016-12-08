import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ForgotPasswordComponent } from "./forgot-password.comp";

const routes: Routes = [
  { path: "forgot-password", component: ForgotPasswordComponent },
];
export const ForgotPasswordRoutes: ModuleWithProviders = RouterModule.forChild(routes);