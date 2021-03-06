import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SplashComponent } from "./splash.comp";

const routes: Routes = [
  { path: "splash", component: SplashComponent },
];
export const SplashRoutes: ModuleWithProviders = RouterModule.forChild(routes);