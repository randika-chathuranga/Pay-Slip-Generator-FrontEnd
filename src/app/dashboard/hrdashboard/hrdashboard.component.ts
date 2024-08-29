import { Component, Input, OnInit } from '@angular/core';
import { Owner } from 'src/app/owner';
import { AuthService } from 'src/app/auth.service';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/employee.service';
import { EmployeeList } from 'src/app/employeelist';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { AddEmployeeComponent } from 'src/app/add-employee/add-employee.component';



interface Payslip_info {
  month: string,
  amount: number,
  epf: number,
  increments:number,
  otRate: number,
  insuarance: number,
  tax: number,
  deduction: number
}

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
  selector: 'app-hrdashboard',
  templateUrl: './hrdashboard.component.html',
  styleUrls: ['./hrdashboard.component.scss']
})
export class HrdashboardComponent implements OnInit {

  public employeeList:EmployeeList[] = [];
  public count = "";

  owner: Owner = new Owner;
  constructor(private authservice: AuthService, public router: Router, private employeeservice:EmployeeService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.employeeservice.addEmployeeDetails().subscribe((data)=>{
      this.employeeList = data;
   })

   this.employeeservice.employeeCount().subscribe((data)=>{
     this.count = data;
   })
  }

  onCreate(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus =true;
    dialogConfig.width = "60%"
    this.dialog.open(AddEmployeeComponent, dialogConfig);

  }



  selectedYear: string = '';
  selected: string= '';

  //logout from dashboard
  logout(){
    // this.authservice.isUserLoggedOut()
    // localStorage.removeItem("token");
    localStorage.clear();
    this.router.navigate(['/login'])
  }

  payslipDetails: Payslip_info[] = [
    {'month':'January', 'amount': 1000, 'epf':10, 'increments':2000, 'otRate':45, 'insuarance':500, 'tax':12, 'deduction':50},
    {'month':'January', 'amount': 1000, 'epf':10, 'increments':2000, 'otRate':45, 'insuarance':500, 'tax':12, 'deduction':50},
    {'month':'January', 'amount': 1000, 'epf':10, 'increments':2000, 'otRate':45, 'insuarance':500, 'tax':12, 'deduction':50},
    {'month':'January', 'amount': 1000, 'epf':10, 'increments':2000, 'otRate':45, 'insuarance':500, 'tax':12, 'deduction':50},
    {'month':'January', 'amount': 1000, 'epf':10, 'increments':2000, 'otRate':45, 'insuarance':500, 'tax':12, 'deduction':50},
  ];

  newEmployees: Employee_details[] = [
  {'emp_id': 1200, 'emp_name':'person', 'emp_address': '34/adfg', 'emp_basic_salary':20000, 'emp_email':'ra@gmail.com', 'emp_designation': 'cleark', 'emp_status':true},
  {'emp_id': 1200, 'emp_name':'person', 'emp_address': '34/adfg', 'emp_basic_salary':20000, 'emp_email':'ra@gmail.com', 'emp_designation': 'cleark', 'emp_status':true},
  {'emp_id': 1200, 'emp_name':'person', 'emp_address': '34/adfg', 'emp_basic_salary':20000, 'emp_email':'ra@gmail.com', 'emp_designation': 'cleark', 'emp_status':true},
  {'emp_id': 1200, 'emp_name':'person', 'emp_address': '34/adfg', 'emp_basic_salary':20000, 'emp_email':'ra@gmail.com', 'emp_designation': 'cleark', 'emp_status':true},
  ]


}
