import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialPageComponent } from './componett/initial-page/initial-page.component';
import { RegistrationComponent } from './componett/registration/registration.component';
import { LoginComponent } from './componett/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialPageComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
