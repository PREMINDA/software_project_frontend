import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {UserLoginComponent} from './user-login/user-login.component';
import {LoginPageComponent} from './login-page/login-page.component';
import {OrganizationLoginPageComponent} from './organization-login-page/organization-login-page.component';

const routes: Routes = [
  {path:'admin-login',component:LoginPageComponent},
  {path:'organization-login',component:OrganizationLoginPageComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
