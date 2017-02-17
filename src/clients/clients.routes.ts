import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ClientsComponent } from './clients.comp';

const routes: Routes = [
   { path: "clients", component: ClientsComponent }
];
export const ClientsRoutes: ModuleWithProviders = RouterModule.forChild(routes);