import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganizationRoutingModule } from './organization-routing.module';
import {SharedModule} from '../shared/shared.module';
import { OrganizationDashoboardComponent } from './organization-dashoboard/organization-dashoboard.component';
import { OrganizationListViewComponent } from './views/organization-list-view/organization-list-view.component';
import { UserListViewOrganizationComponent } from './views/user-list-view-organization/user-list-view-organization.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { UserDetailViewOrganizationComponent } from './views/user-detail-view-organization/user-detail-view-organization.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    OrganizationDashoboardComponent,
    OrganizationListViewComponent,
    UserListViewOrganizationComponent,
    UserDetailViewOrganizationComponent
  ],
  imports: [
    CommonModule,
    OrganizationRoutingModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    MatSelectModule
  ]
})
export class OrganizationModule { }
