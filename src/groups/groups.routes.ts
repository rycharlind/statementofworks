import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { GroupsComponent } from './groups.comp';

const routes: Routes = [
   { path: "groups", component: GroupsComponent }
];
export const GroupsRoutes: ModuleWithProviders = RouterModule.forChild(routes);