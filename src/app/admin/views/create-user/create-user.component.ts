import { Component, OnInit } from '@angular/core';
import {UserModal} from '../user-list-view/user.modal';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {config} from '../../../config';
import {matchValidator} from '../../../utils/CustomValidator';
import {districts, organizationTypes, userTypes, verification,genderCat} from '../../../shared/model/constent'

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {

  id = '';
  user !: UserModal;
  loader: boolean = true;
  form !: FormGroup;
  hide = true;
  hide1 = true;

  dis : string[] = districts;
  options:string[]=organizationTypes;
  userT:string[]=userTypes;
  veri:string[]=verification;
  gen:string[]=genderCat;


  constructor(
    private fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private router: Router,
    private location: Location
  ) {
    form: FormGroup;
  }

  ngOnInit(): void {
    this.createFrom();
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.loader = false;
    if(id){
      this.id = id;
    }
  }

  createFrom(){
    this.form = this.fb.group({
      nationalId: ["",[Validators.required]],
      fullName: ["",[Validators.required]],
      address: ["",[Validators.required]],
      town: ["",[Validators.required]],
      isVertified:["",[Validators.required]],
      gender:["",[Validators.required]],
      location:"",
      birthDate:["",[Validators.required]],
      district:["",[Validators.required]],
      primaryContactNumber:["", [Validators.minLength(10),
        Validators.maxLength(10), Validators.pattern("^[0-9]*$")]],
      emergencyContactNumber:["", [Validators.required, Validators.minLength(10),
        Validators.maxLength(10), Validators.pattern("^[0-9]*$")]],
      userType:["",[Validators.required]],
      password:['', [Validators.required, matchValidator('confirmPassword', true)]],
      confirmPassword:['', [Validators.required,matchValidator('password')]],
    });
  }

  setValue(){
    this.form.setValue(this.user);
  }

  fetchUserData(){
    this.http.get(`${config.adminService}/User/${this.id}`).subscribe(res=>{
      this.user = res as UserModal;
      this.setValue();
      this.loader = false;
    })
  }

  goBack() {
    this.location.back();
  }

  onSubmit(form: FormGroup) {
    this.loader = true;
    this.user = form.value as UserModal;
    console.log(this.form)
    if(this.form.valid){
      this.http.post(`${config.adminService}/Scaner`,this.user).subscribe(
        res=>{
          this.loader = false;
          this.router.navigate([`app/admin/users`]);
        }
      )
    }
  }

}
