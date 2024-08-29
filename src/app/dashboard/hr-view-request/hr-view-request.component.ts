import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { RequestDetails } from 'src/app/requestdetails';


@Component({
  selector: 'app-hr-view-request',
  templateUrl: './hr-view-request.component.html',
  styleUrls: ['./hr-view-request.component.scss']
})
export class HrViewRequestComponent implements OnInit {
  public requestDetails: RequestDetails[] =[];


  constructor(private employeeservice:EmployeeService) { }

  ngOnInit(): void {
    this.employeeservice.getRequest().subscribe((data)=>{
      this.requestDetails = data;
    })
  }

}
