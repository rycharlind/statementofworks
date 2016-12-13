import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SowsComponent } from './sows.comp';

const routes: Routes = [
   { path: "sows", component: SowsComponent }
];
export const SowsRoutes: ModuleWithProviders = RouterModule.forChild(routes);