import { Component, OnInit } from '@angular/core';
import {UserModal} from '../../../admin/views/user-list-view/user.modal';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {config} from '../../../config';

@Component({
  selector: 'app-user-list-view-organization',
  templateUrl: './user-list-view-organization.component.html',
  styleUrls: ['./user-list-view-organization.component.scss']
})
export class UserListViewOrganizationComponent implements OnInit {

  loader: boolean = true;
  users: UserModal[] = [];
  displayedColumns = ["fullName", "nationalId", "isVertified","actions","delete"];

  constructor(private http: HttpClient,private router: Router) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void{
    this.http.get(`${config.adminService}/User`).subscribe((res:any)=>{
      this.users = res.data as UserModal[];
      this.loader = false;
    })
  }

  openPreview(element : UserModal){
    this.router.navigate([`app/organization/user-detail/${element.id}`]);
  }

}
