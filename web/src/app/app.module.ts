import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { MaterialModule } from '@angular/material';

import { QuSquaredModule } from '../../quSquared';

import { AppRoutes } from './app.routes';
import { AppComponent } from './app.comp';
import { HeaderComponent } from '../header/header.comp';
import { SideNavComponent } from '../side-nav/side-nav.comp';
import { HomeModule } from '../home/home.module';
import { ProfileModule } from '../profile/profile.module';
import { SignInModule } from '../sign-in/sign-in.module';
import { SignUpModule } from '../sign-up/sign-up.module';
import { SplashModule } from '../splash/splash.module';

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
    SplashModule,
    RouterModule.forRoot(AppRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    MaterialModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }