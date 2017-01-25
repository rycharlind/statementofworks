import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SettingsComponent } from './settings.comp';

const routes: Routes = [
   { path: "settings", component: SettingsComponent }
];
export const SettingsRoutes: ModuleWithProviders = RouterModule.forChild(routes);