import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from './auth/guards/auth.guard';
import {HomeComponent} from './home/home.component';


const routes: Routes = [
  {
    path:'app',loadChildren:()=>import('./admin/admin.module').then(m=>m.AdminModule),
    canActivate:[AuthGuard],
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
