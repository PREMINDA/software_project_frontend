import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrganizationGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }

  canActivate() {
    if (this.authService.isLoggedInOrganization()) {
      return true;
    }
    else {
      if(this.authService.isLoggedInUser()){
        this.router.navigate(['/app/admin']);
      }else{
        this.router.navigate(['/login/organization-login']);
      }

    }
    return false;
  }

}
