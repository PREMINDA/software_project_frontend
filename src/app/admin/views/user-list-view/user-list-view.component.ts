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

  deleteUser(user:UserModal):void{
    this.loader = true;
    this.http.delete(`${config.adminService}/User/${user.id}`).subscribe((res:any)=>{
      this.users = res.data as UserModal[];
      this.fetchData();
    })
  }

  openPreview(element : UserModal){
    console.log(element.nationalId)
    this.router.navigate([`app/admin/user-detail/${element.id}`]);
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
