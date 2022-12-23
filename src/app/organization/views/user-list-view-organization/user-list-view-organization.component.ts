import { Component, OnInit,ViewChild } from '@angular/core';
import {UserModal} from '../../../admin/views/user-list-view/user.modal';
// import { MatPaginator } from '@angular/material';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {config} from '../../../config';
import {AuthService} from '../../../auth/service/auth.service';
import {Organization, OrganizationRegister} from '../../../admin/views/organization-list/organization.modal';

@Component({
  selector: 'app-user-list-view-organization',
  templateUrl: './user-list-view-organization.component.html',
  styleUrls: ['./user-list-view-organization.component.scss']
})
export class UserListViewOrganizationComponent implements OnInit {

  // @ViewChild(MatPaginator) paginator: MatPaginator;

  loader: boolean = true;
  organizationData !: OrganizationRegister | undefined;
  users: UserModal[] = [];
  displayedColumns = ["fullName", "nationalId", "isVertified","actions","delete"];

  constructor(private http: HttpClient,private router: Router,private auth:AuthService) {}

  ngOnInit(): void {
    this.organizationData = this.auth.getOrganizationData();
    this.fetchData();
  }

  fetchData(): void{
    this.http.get(`${config.organization}/Organization/OrganizationUser/${this.organizationData && this.organizationData.id}`).subscribe((res:any)=>{
      this.users = res.data as UserModal[];
      this.loader = false;
    })
  }

  openPreview(element : UserModal){
    this.router.navigate([`app/organization/user-detail/${element.id}`]);
  }

  getColor(value:string):string{
    let color = '';
    switch (value){
      case 'Verified':{
        color = '#00DC10';
        break;
      }
      case 'Pending':{
        color = 'orange';
        break;
      }
      case 'NotVerified':{
        color = 'red';
        break;
      }
    }
    return color;
  }


}
