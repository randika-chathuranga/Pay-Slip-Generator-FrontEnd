import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';


@Component({
  selector: 'app-initial-dashboard',
  templateUrl: './initial-dashboard.component.html',
  styleUrls: ['./initial-dashboard.component.scss']
})
export class InitialDashboardComponent implements OnInit {

  ownerDashboard: boolean = false;
  role:string  ="";

  constructor(public auth: AuthService,) { }

  ngOnInit(): void {
    this.role = this.auth.getRole() as string;
  }







}
