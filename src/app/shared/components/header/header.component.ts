import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../auth/service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLogIn = false;

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
    this.isLogIn = this.authService.isLoggedIn();
  }

  logOut(){
    this.authService.doLogoutUser();
  }

}
