import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SowComponent } from './sow.comp';

const routes: Routes = [
   { path: "sow/:groupKey/:sowKey", component: SowComponent }
];
export const SowRoutes: ModuleWithProviders = RouterModule.forChild(routes);