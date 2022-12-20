import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { OrganizationRegisterComponent } from './organization-register/organization-register.component';


@NgModule({
  declarations: [
    OrganizationRegisterComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule
  ]
})
export class RegisterModule { }
