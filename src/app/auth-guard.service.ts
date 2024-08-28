import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public auth: AuthService, public router: Router) { }

  // canActivate(): boolean {
  //   if (!this.auth.isUserLoggedIn()) {
  //     this.router.navigate(['login']);
  //     return false;
  //   }
  //   return true;
  // }

  canActivate(
    next: ActivatedRouteSnapshot, 
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree{
    return this.checkUserLogin(next);

  }


  checkUserLogin(route: ActivatedRouteSnapshot): boolean {
    if (!this.auth.isUserLoggedIn()) {
      this.router.navigate(['/login']);
      return false; 
    }else{
      const userRole = this.auth.getRole();

      if (route.data['roles'] && route.data['roles'].indexOf(userRole) === -1) {
        this.router.navigate(['/not-found']);
        return false;
      }
      return true;
    }



    

  }

}


  // checkUserLogin(route: ActivatedRouteSnapshot, url: any): boolean {
  //   if (this.auth.isUserLoggedIn()) {
  //     const userRole = this.auth.getRole();
  //     if (route.data['OWNER'].indexOf(userRole) === -1) {
  //       this.router.navigate(['/owner-dashboard']);
  //       return false;
  //     }
  //     return true;
  //   }
  // }



