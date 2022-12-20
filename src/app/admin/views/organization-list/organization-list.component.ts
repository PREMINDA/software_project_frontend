import { Component, OnInit } from '@angular/core';
import {UserModal} from '../user-list-view/user.modal';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {config} from '../../../config';
import {Organization} from './organization.modal';
import loader from '@angular-devkit/build-angular/src/webpack/plugins/single-test-transform';

@Component({
  selector: 'app-organization-list',
  templateUrl: './organization-list.component.html',
  styleUrls: ['./organization-list.component.scss']
})
export class OrganizationListComponent implements OnInit {

  organizations: Organization[] = [];
  displayedColumns = ["organizationName", "organizationType", "isApproved", "more","edit","delete"];
  loader: boolean = true;

  constructor(private http: HttpClient,private router: Router) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void{
    this.http.get(`${config.organization}/Organization`).subscribe((res:any)=>{
      this.organizations = res.data as Organization[];
      this.loader = false;
    })
  }

  openPreview(element : Organization){
    console.log(element.organizationName)
    this.router.navigate([`app/admin/user-edit/${element.id}`]);
  }

  selectOrganization(element: any) {
    console.log(element)
    this.router.navigate([`app/admin/organization/${element.id}`]);
  }

  organizationDelete(element: Organization) {
    this.loader = true;
    this.http.delete(`${config.organization}/Organization/${element.id}`).subscribe(res=>{
      this.fetchData();
    })
  }
}
