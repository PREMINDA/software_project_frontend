import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {config} from '../../../config';
import {Organization} from '../organization-list/organization.modal';

@Component({
  selector: 'app-organization-detail',
  templateUrl: './organization-detail.component.html',
  styleUrls: ['./organization-detail.component.scss']
})
export class OrganizationDetailComponent implements OnInit {

  id = '';
  organization !: Organization;
  loader: boolean = true;
  constructor(private activatedRoute: ActivatedRoute,private http: HttpClient) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    if(id){
      this.id = id;
      this.fetchUserData();
    }
  }

  fetchUserData(){
    this.http.get(`${config.organization}/Organization/${this.id}`).subscribe(res=>{
      this.organization = res as Organization;
      this.loader = false;
      console.log(this.organization)
    })
  }

}
