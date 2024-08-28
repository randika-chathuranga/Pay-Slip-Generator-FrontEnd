import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class RoleGuard implements CanActivate {

  constructor(public auth: AuthService, public router: Router) { }
  
  canActivate(): boolean {
    
    if (localStorage.getItem('role') === 'OWNER' ) {
      return true;
    }
    return false;
  }


  
   
  }

  
  

