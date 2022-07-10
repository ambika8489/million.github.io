import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InitialPageComponent} from './componett/initial-page/initial-page.component';
import {RegistrationComponent} from './componett/registration/registration.component';
import {LoginComponent} from './componett/login/login.component';
import {ProductsComponent} from './componett/products/products.component';
import {ContactComponent} from './componett/contact/contact.component';
import {AboutComponent} from './componett/about/about.component';



const routes: Routes = [
  { path: 'home', component: InitialPageComponent },
  { path: 'million', component: InitialPageComponent },
  { path: '', component: InitialPageComponent },

  { path: 'general', component: RegistrationComponent },
  { path: 'neurology', component: LoginComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'aboutus', component: AboutComponent },
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
