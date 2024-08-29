import { Component, OnInit } from '@angular/core';
import { Owner } from 'src/app/owner';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  owner: Owner = new Owner;
  constructor(private authservice: AuthService, public router: Router) { }

  ngOnInit(): void {
  }

   //logout from dashboard
   logout(){
    // this.authservice.isUserLoggedOut()
    // localStorage.removeItem("token");
    localStorage.clear();
    this.router.navigate(['/login'])
  }

}
