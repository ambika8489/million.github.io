import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InitialPageComponent } from './componett/initial-page/initial-page.component';
import { RegistrationComponent } from './componett/registration/registration.component';
import { LoginComponent } from './componett/login/login.component';
import { ProductsComponent } from './componett/products/products.component';
import { ContactComponent } from './componett/contact/contact.component';
import { AboutComponent } from './componett/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    InitialPageComponent,
    RegistrationComponent,
    LoginComponent,
    ProductsComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
