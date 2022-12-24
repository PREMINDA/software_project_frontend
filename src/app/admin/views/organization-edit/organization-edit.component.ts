import { Component, OnInit } from '@angular/core';
import {Organization, OrganizationResponse} from '../organization-list/organization.modal';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {config} from '../../../config';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Location} from '@angular/common';

@Component({
  selector: 'app-organization-edit',
  templateUrl: './organization-edit.component.html',
  styleUrls: ['./organization-edit.component.scss']
})
export class OrganizationEditComponent implements OnInit {

  id = '';
  organization !: Organization;
  loader: boolean = true;
  form!: FormGroup;

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
      organizationName: '',
      organizationType: '',
      isApproved: '',
      address:'',
      city:'',
      state:'',
      postalCode:'',
      userType:'',
      emailAddress:'',
      mobileNumber:'',
      employeesWithPasses:'',
      telNumber:'',
    });
  }

  fetchUserData(){
    this.http.get(`${config.organization}/Organization/${this.id}`).subscribe(res=>{
      this.organization = res as OrganizationResponse;
      this.setValue();
      this.loader = false;
    })
  }

  setValue(){
    this.form.setValue(this.organization)
  }

  onSubmit(form: FormGroup) {
    this.loader = true;
    this.organization = form.value as OrganizationResponse;
    this.http.put(`${config.organization}/Organization/${this.id}`,this.organization).subscribe(
      res=>{
        this.loader = false;
        this.router.navigate([`app/admin/organization`]);
      }
    )
  }

  goBack() {
    this.location.back();
  }
}
