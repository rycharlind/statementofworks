import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { MaterialModule } from '@angular/material';
import 'hammerjs';
import { QuSquaredModule } from '../../quSquared';

import { AppRoutes } from './app.routes';

// Components
import { AppComponent } from './app.comp';
import { HeaderComponent } from '../header/header.comp';
import { SideNavComponent } from '../side-nav/side-nav.comp';
import { DocUploaderComponent } from '../doc-uploader/doc-uploader.comp';
import { ErrorComponent } from '../error-service/error.comp';

// Modules
import { HomeModule } from '../home/home.module';
import { ProfileModule } from '../profile/profile.module';
import { SignInModule } from '../sign-in/sign-in.module';
import { SignUpModule } from '../sign-up/sign-up.module';
import { ForgotPasswordModule } from '../forgot-password/forgot-password.module';
import { SplashModule } from '../splash/splash.module';
import { SowsModule } from '../sows/sows.module';
import {SowModule} from '../sow/sow.module';
import {SettingsModule} from '../settings/settings.module';

// Services
import { ErrorService } from '../error-service/error.svc';

export const firebaseConfig = {
  apiKey: "AIzaSyA2lKWhBJZq_shhMFGXtbyH2eD-nKS7RWU",
  authDomain: "statement-of-works.firebaseapp.com",
  databaseURL: "https://statement-of-works.firebaseio.com",
  storageBucket: "statement-of-works.appspot.com",
  messagingSenderId: "169260239374"
};

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    QuSquaredModule,
    HomeModule,
    ProfileModule,
    SignInModule,
    SignUpModule,
    ForgotPasswordModule,
    SplashModule,
    SowsModule,
    SowModule,
    SettingsModule,
    RouterModule.forRoot(AppRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    DocUploaderComponent,
    ErrorComponent
  ],
  providers: [
    ErrorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
