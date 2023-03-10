import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {config} from '../../../config';
import {UserModal} from '../user-list-view/user.modal';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  id = '';
  user !: UserModal;
  loader: boolean = true;
  form !: FormGroup;

  options:string[]=["Verified", "Not Verified", "Pending"];


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
    if(id){
      this.id = id;
      this.fetchUserData();
    }
  }

  createFrom(){
    this.form = this.fb.group({
      id: '',
      nationalId: '',
      fullName: '',
      town: '',
      district:'',
      isVertified:'',
      gender:'',
      location:'',
      birthDate:'',
      primaryContactNumber:'',
      emergencyContactNumber:'',
      userType:'',
      permissions:'',
      roles:'',
      organizationId:'',
      vaccinationData:''
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
    this.http.put(`${config.adminService}/User/${this.id}`,this.user).subscribe(
      res=>{
        this.loader = false;
        this.router.navigate([`app/admin/users`]);
      }
    )
  }
}
