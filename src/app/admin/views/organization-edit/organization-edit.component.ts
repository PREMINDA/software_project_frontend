import { Component, OnInit } from '@angular/core';
import {Organization} from '../organization-list/organization.modal';
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
      isApproved: false
    });
  }

  fetchUserData(){
    this.http.get(`${config.organization}/Organization/${this.id}`).subscribe(res=>{
      this.organization = res as Organization;
      this.setValue();
      this.loader = false;
    })
  }

  setValue(){
    this.form.setValue({
      'id':this.organization.id,
      'organizationName':this.organization.organizationName,
      'organizationType':this.organization.organizationType,
      'isApproved':this.organization.isApproved
    })
  }

  onSubmit(form: FormGroup) {
    this.loader = true;
    this.organization = form.value as Organization;
    this.http.put(`${config.organization}/Organization/${this.id}`,this.organization).subscribe(
      res=>{
        this.loader = false;
        this.router.navigate([`app/organization`]);
      }
    )
  }

  goBack() {
    this.location.back();
  }
}
