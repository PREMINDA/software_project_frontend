import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/service/auth.service';
import SideMenuModal, {sideManuConfigDataOrg, sideManuConfigDataUser} from './side-menu.config';
import {User} from '../../auth/models/user';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {

  sideMenuData !: SideMenuModal[];
  logUser : User | undefined;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.logUser = this.authService.getUserData();
    if (this.authService.isLoggedInUser()){
      this.sideMenuData = sideManuConfigDataUser;
    }else if(this.authService.isLoggedInOrganization()){
      this.sideMenuData = sideManuConfigDataOrg;
    }
  }

  logout(){
    this.authService.doLogoutUser();
    this.authService.windowsReload();
  }

}
