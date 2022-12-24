import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrganizationDashoboardComponent} from './organization-dashoboard/organization-dashoboard.component';
import {UserListViewComponent} from '../admin/views/user-list-view/user-list-view.component';
import {
  UserListViewOrganizationComponent
} from './views/user-list-view-organization/user-list-view-organization.component';
import {UserDetailComponent} from '../admin/views/user-detail/user-detail.component';
import {
  UserDetailViewOrganizationComponent
} from './views/user-detail-view-organization/user-detail-view-organization.component';
import {HomeComponent} from '../home/home.component';

const routes: Routes = [
  {path:'',component:OrganizationDashoboardComponent,
    children:[
      {path:'',component:HomeComponent},
      {path:'users',component:UserListViewOrganizationComponent},
      {path:'user-detail/:id', component: UserDetailViewOrganizationComponent },
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizationRoutingModule { }
