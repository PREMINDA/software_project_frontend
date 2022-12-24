import { Component, OnInit } from '@angular/core';
import {UserModal, VaccineData} from '../../../admin/views/user-list-view/user.modal';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {config} from '../../../config';
import {PassData} from '../../../shared/model/passData';

@Component({
  selector: 'app-user-detail-view-organization',
  templateUrl: './user-detail-view-organization.component.html',
  styleUrls: ['./user-detail-view-organization.component.scss']
})
export class UserDetailViewOrganizationComponent implements OnInit {

  id = '';
  user !: UserModal;
  passes !: PassData[];
  loader: boolean = true;
  form !: FormGroup;

  options:string[]=["Verified", "Not Verified", "Pending"];

  vcData: VaccineData[] = []

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
      this.fetchPassData();
      this.fetchVcData();
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
      vaccinationData:'',
      organizationId:''
    });
  }

  setValue(){
    this.form.setValue(this.user);
    console.log(this.form.value as UserModal);
  }

  fetchUserData(){
    this.http.get(`${config.organization}/Organization/User/${this.id}`).subscribe(res=>{
      this.user = res as UserModal;
      this.setValue();
    })
  }

  fetchVcData(){
    this.http.get(`${config.userService}/user/vaccination-details/${this.id}`).subscribe(res=>{
      this.vcData = res as VaccineData[];
      this.setValue();
    })
  }

  fetchPassData(){
    this.http.get(`${config.passService}/Pass-userid/${this.id}`).subscribe(res=>{
      this.passes = res as PassData[];
      console.log(this.passes)
      this.loader = false;
    })
  }

  goBack() {
    this.location.back();
  }

  onSubmit(form: FormGroup) {
    this.loader = true;
    this.user = form.value as UserModal;
    this.http.put(`${config.organization}/Organization/User/${this.id}`,this.user).subscribe(
      res=>{
        this.loader = false;
      }
    )
  }

  onlyDate(date: Date):string {
    return  new Date(date).toISOString().split('T')[0];
  }

  editPass(pass : PassData) {
    pass.isApproved = true;
    this.loader = true;
    this.http.put(`${config.passService}/Pass/${pass.id}`,pass).subscribe(res=>{
      this.loader = false;
      this.fetchUserData();
    })
  }

  deletePass(pass: PassData) {
    this.loader = true;
    this.http.delete(`${config.passService}/Pass/${pass.id}`).subscribe(res=>{
      this.loader = false;
      this.fetchPassData();
    })
  }
}
