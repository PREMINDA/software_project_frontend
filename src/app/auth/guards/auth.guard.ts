import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {
    if (this.authService.isLoggedInUser()) {
      return true;
    }
    else {
      console.log(this.authService.isLoggedInOrganization())
      if(this.authService.isLoggedInOrganization()){
        this.router.navigate(['/app/organization']);
      }else{
        this.router.navigate(['/login/admin-login']);
      }

    }
    return false;
  }

}
