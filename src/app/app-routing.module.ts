import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InitialPageComponent} from './componett/initial-page/initial-page.component';
import {RegistrationComponent} from './componett/registration/registration.component';
import {LoginComponent} from './componett/login/login.component';


const routes: Routes = [
  { path: '', component: InitialPageComponent },
  { path: 'general', component: RegistrationComponent },
  { path: 'neurology', component: LoginComponent },

  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
