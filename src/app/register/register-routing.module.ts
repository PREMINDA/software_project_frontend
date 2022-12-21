import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from '../login/login-page/login-page.component';
import {OrganizationRegisterComponent} from './organization-register/organization-register.component';

const routes: Routes = [
  {path:'organization',component:OrganizationRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
