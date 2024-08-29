import { Component, OnInit } from '@angular/core';
import { Owner } from 'src/app/owner';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { EmployeeList } from 'src/app/employeelist';
import { AddEmployeeComponent } from 'src/app/add-employee/add-employee.component';



interface Employee_details{
  emp_id: number,
  emp_name: string,
  emp_address: string,
  emp_basic_salary: number,
  emp_email: string,
  emp_designation: string,
  emp_status: boolean,
}


@Component({
  selector: 'app-show-payslips',
  templateUrl: './show-payslips.component.html',
  styleUrls: ['./show-payslips.component.scss']
})
export class ShowPayslipsComponent implements OnInit {


  public employeeList:EmployeeList[] = [];
  public count = "";

  owner: Owner = new Owner;
  constructor(private employeeservice:EmployeeService, public router: Router, ) { }


  ngOnInit(): void {
    this.employeeservice.addEmployeeDetails().subscribe((data)=>{
       this.employeeList = data;
    })

    this.employeeservice.employeeCount().subscribe((data)=>{
      this.count = data;
    })
  }




  CreateTemplatebuttonShow:boolean = true;
  selectedYear: string = '';
  selected: string= '';

  //logout from dashboard
  logout(){
    localStorage.clear();
    this.router.navigate(['/login'])
  }

  newEmployees: Employee_details[] = [
  {'emp_id': 1200, 'emp_name':'person', 'emp_address': '34/adfg', 'emp_basic_salary':20000, 'emp_email':'ra@gmail.com', 'emp_designation': 'cleark', 'emp_status':true},
  {'emp_id': 1200, 'emp_name':'person', 'emp_address': '34/adfg', 'emp_basic_salary':20000, 'emp_email':'ra@gmail.com', 'emp_designation': 'cleark', 'emp_status':true},
  {'emp_id': 1200, 'emp_name':'person', 'emp_address': '34/adfg', 'emp_basic_salary':20000, 'emp_email':'ra@gmail.com', 'emp_designation': 'cleark', 'emp_status':true},
  {'emp_id': 1200, 'emp_name':'person', 'emp_address': '34/adfg', 'emp_basic_salary':20000, 'emp_email':'ra@gmail.com', 'emp_designation': 'cleark', 'emp_status':true},
  ]




}
