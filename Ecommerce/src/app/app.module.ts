import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './module/landing-page/landing-page/landing-page.component';
import { LoginPageComponent } from './module/login-page/login-page.component';
import { RegisterPageComponent } from './module/register-page/register-page.component';
import { MainPageComponent } from './module/main-page/main-page.component';
import { CartPageComponent } from './module/cart-page/cart-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    MainPageComponent,
    CartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
