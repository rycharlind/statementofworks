import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SettingsStepsComponent } from './settings-steps.comp';

const routes: Routes = [
   { path: "settings-steps", component: SettingsStepsComponent },
];
export const SettingsStepsRoutes: ModuleWithProviders = RouterModule.forChild(routes);