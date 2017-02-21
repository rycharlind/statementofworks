import { ModuleWithProviders }  from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { SettingsComponent } from './settings.comp';
import { SettingsStepsComponent } from './settings-steps/settings-steps.comp';

const routes: Routes = [
   {    
        path: "settings", 
        component: SettingsComponent
    }
];
export const SettingsRoutes: ModuleWithProviders = RouterModule.forChild(routes);