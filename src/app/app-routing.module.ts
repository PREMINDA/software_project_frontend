import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './auth/guards/auth.guard';
import {HomeComponent} from './home/home.component';
import {OrganizationGuard} from './auth/guards/organization.guard';


const routes: Routes = [
  {
    path:'app/admin',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule),
    canActivate:[AuthGuard],
  },
  {
    path:'app/organization',loadChildren:()=>import('./organization/organization.module').then(m=>m.OrganizationModule),
    canActivate:[OrganizationGuard],
  },
  {
    path:'login',loadChildren:()=>import('./login/login.module').then(m=>m.LoginModule)
  },
  {
    path:'',component:HomeComponent
  },
  {
    path:'register',loadChildren:()=>import('./register/register.module').then(m=>m.RegisterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
