import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { WorkflowComponent } from './workflow.comp';

const routes: Routes = [
   { path: "workflow", component: WorkflowComponent }
];
export const WorkflowRoutes: ModuleWithProviders = RouterModule.forChild(routes);