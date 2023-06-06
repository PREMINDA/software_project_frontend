import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../auth/service/auth.service';
import {Login, LogResponse} from '../../auth/models/login';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  form!: FormGroup;
  loading = false;
  serverMessage!: string;
  logResponse : LogResponse | undefined;
  errorMessage : string | undefined;

  constructor(private fb: FormBuilder,private auth : AuthService,private router: Router) {
    form: FormGroup;
  }

  ngOnInit() {
    this.form = this.fb.group({
      nic: ['', [Validators.required]],
      password: ['',[Validators.required]],
    });
  }


  get nic() {
    return this.form.get('nic');
  }
  get password() {
    return this.form.get('password');
  }


  async onSubmit() {
    this.loading = true;
    this.loading = false;
    if(this.form.valid){
      const loginData:Login={
        nationalId:this.nic?.value,
        password:this.password?.value,
      }
      this.auth.login(loginData).subscribe(res=>{
        this.logResponse = res as LogResponse;
        this.auth.doLoginUser(this.logResponse);
        this.router.navigate(['app/admin']);
      },(err:any)=>{this.errorMessage = err.message})
    }
  }

}
