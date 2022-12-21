import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { UserLoginComponent } from './user-login/user-login.component';
import { LoginPageComponent } from './login-page/login-page.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {SharedModule} from '../shared/shared.module';
import { OrganizationLoginPageComponent } from './organization-login-page/organization-login-page.component';
import { OrganizationLoginComponent } from './organization-login/organization-login.component';


@NgModule({
  declarations: [
    UserLoginComponent,
    LoginPageComponent,
    OrganizationLoginPageComponent,
    OrganizationLoginComponent
  ],
    imports: [
        CommonModule,
        LoginRoutingModule,
        MatFormFieldModule,
        MatCardModule,
        ReactiveFormsModule,
        MatInputModule,
        MatButtonModule,
        SharedModule,
    ]
})
export class LoginModule { }
