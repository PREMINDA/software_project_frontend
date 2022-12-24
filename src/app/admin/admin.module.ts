import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {SharedModule} from '../shared/shared.module';
import { TestingCompComponent } from './testing-comp/testing-comp.component';
import { UserListViewComponent } from './views/user-list-view/user-list-view.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { UserDetailComponent } from './views/user-detail/user-detail.component';
import { OrganizationListComponent } from './views/organization-list/organization-list.component';
import { OrganizationDetailComponent } from './views/organization-detail/organization-detail.component';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { OrganizationEditComponent } from './views/organization-edit/organization-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import { CreateUserComponent } from './views/create-user/create-user.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    DashboardComponent,
    TestingCompComponent,
    UserListViewComponent,
    UserDetailComponent,
    OrganizationListComponent,
    OrganizationDetailComponent,
    OrganizationEditComponent,
    CreateUserComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class AdminModule { }
