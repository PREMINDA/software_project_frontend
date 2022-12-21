import { Component, OnInit } from '@angular/core';
import {UserModal, VaccineData} from '../../../admin/views/user-list-view/user.modal';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {config} from '../../../config';

@Component({
  selector: 'app-user-detail-view-organization',
  templateUrl: './user-detail-view-organization.component.html',
  styleUrls: ['./user-detail-view-organization.component.scss']
})
export class UserDetailViewOrganizationComponent implements OnInit {

  id = '';
  user !: UserModal;
  loader: boolean = true;
  form !: FormGroup;

  options:string[]=["Verified", "Not Verified", "Pending"];

  vcData: VaccineData[] = [
    {
      vaccinatedDate:new Date().toISOString().split('T')[0],
      vaccinatedPlace:'balan',
      vaccineDoseNumber:1,
      vaccineType:'sin'
    },
    {
      vaccinatedDate:new Date().toISOString().split('T')[0],
      vaccinatedPlace:'balan',
      vaccineDoseNumber:1,
      vaccineType:'sin'
    },
    {
      vaccinatedDate:new Date().toISOString().split('T')[0],
      vaccinatedPlace:'balan',
      vaccineDoseNumber:1,
      vaccineType:'sin'
    },
    ]

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
      vaccinationData:''
    });
  }

  setValue(){
    this.form.setValue(this.user);
    console.log(this.form.value as UserModal);
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
    this.http.put(`${config.orgserivce}/Organization/User/${this.id}`,this.user).subscribe(
      res=>{
        this.loader = false;
        this.router.navigate([`app/admin/users`]);
      }
    )
  }

}
