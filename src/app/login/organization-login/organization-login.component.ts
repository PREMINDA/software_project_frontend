import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Login, LogResponse, OrganizationLogin} from '../../auth/models/login';
import {AuthService} from '../../auth/service/auth.service';
import {Router} from '@angular/router';
import {OrganizationLoginResponse} from '../../admin/views/organization-list/organization.modal';

@Component({
  selector: 'app-organization-login',
  templateUrl: './organization-login.component.html',
  styleUrls: ['./organization-login.component.scss']
})
export class OrganizationLoginComponent implements OnInit {

  form!: FormGroup;
  loading = false;
  serverMessage!: string;
  logResponse : OrganizationLoginResponse | undefined;
  errorMessage : string | undefined;

  constructor(private fb: FormBuilder,private auth : AuthService,private router: Router) {
    form: FormGroup;
  }

  ngOnInit() {
    this.form = this.fb.group({
      emailAddress: ['', [Validators.required]],
      password: ['',[Validators.required]],
    });
  }


  get email() {
    return this.form.get('emailAddress');
  }
  get password() {
    return this.form.get('password');
  }


  async onSubmit() {
    this.loading = true;
    this.loading = false;
    if(this.form.valid){
      const loginData:OrganizationLogin={
        emailAddress:this.email?.value,
        password:this.password?.value,
      }
      this.auth.loginOrg(loginData).subscribe(res=>{
        this.logResponse = res as OrganizationLoginResponse;
        this.auth.doLoginOrganization(this.logResponse);
        this.router.navigate(['']);
      },(err:any)=>{this.errorMessage = err.message;
        console.log(this.errorMessage);
      })
    }
  }

}
