import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TestingCompComponent} from './testing-comp/testing-comp.component';
import {UserListViewComponent} from './views/user-list-view/user-list-view.component';
import {UserDetailComponent} from './views/user-detail/user-detail.component';
import {OrganizationListComponent} from './views/organization-list/organization-list.component';
import {OrganizationDetailComponent} from './views/organization-detail/organization-detail.component';
import {OrganizationEditComponent} from './views/organization-edit/organization-edit.component';

const routes: Routes = [

  { path:'',
    component:DashboardComponent,
    children:[
      {path:'',component:TestingCompComponent},
      {path:'users',component:UserListViewComponent},
      {path: 'user-detail/:id', component: UserDetailComponent },
      {path:'organization',component:OrganizationListComponent},
      {path:'organization/:id',component:OrganizationDetailComponent},
      {path:'user-edit/:id',component:OrganizationEditComponent},

    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
