import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../auth/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLogInUser = false;
  isLogOrganization = false;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.isLogInUser = this.authService.isLoggedInUser();
    this.isLogOrganization = this.authService.isLoggedInOrganization();
  }

  logOut(){
    this.authService.doLogoutUser();
  }

}
