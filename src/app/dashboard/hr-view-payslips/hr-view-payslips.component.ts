import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee.service';
import { PayslipList } from 'src/app/payslip-details';


@Component({
  selector: 'app-hr-view-payslips',
  templateUrl: './hr-view-payslips.component.html',
  styleUrls: ['./hr-view-payslips.component.scss']
})
export class HrViewPayslipsComponent implements OnInit {
  public payslipList!:PayslipList

  selectedYear:number | undefined;

  constructor(private employeeservice:EmployeeService) { }

  ngOnInit(): void {

    this.employeeservice.getAllPayslips().subscribe((data)=>{
      this.payslipList = data;
   })

  }




  download(){
    this.employeeservice.downloadPayslips().subscribe((data)=>{
      const blob = new Blob([data], { type: 'application/pdf' });
      const url= window.URL.createObjectURL(blob);
      window.open(url);
    })

  }



}
