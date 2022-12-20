import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {config} from '../../../config';
import {UserModal} from './user.modal';
import {User} from '../../../auth/models/user';
import {Router} from '@angular/router';


@Component({
  selector: 'app-user-list-view',
  templateUrl: './user-list-view.component.html',
  styleUrls: ['./user-list-view.component.scss']
})
export class UserListViewComponent implements OnInit {

  users: UserModal[] = [];
  displayedColumns = ["fullName", "nationalId", "isVertified","actions","delete"];
  loader: boolean = true;

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
    console.log(element.nationalId)
    this.router.navigate([`app/admin/user-detail/${element.id}`]);
  }

}
