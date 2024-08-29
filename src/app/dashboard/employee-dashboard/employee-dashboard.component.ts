import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


interface Payslip_info {
  eid: number,
  name: string,
  amount: number,
  epf: number,
  increments:number,
  otRate: number,
  insuarance: number,
  tax: number,
  deduction: number
}

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit {


  selectedYear:number | undefined;
  selected:number | undefined;


  constructor(public router: Router, ) { }

  ngOnInit(): void {

  }

  redirectToRequest(){
    this.router.navigate(['/emp-request'])
  }

  payslipDetails: Payslip_info[] = [
    {'eid':1122,'name':'K.H.C.Silva', 'amount': 1000, 'epf':10, 'increments':2000, 'otRate':45, 'insuarance':500, 'tax':12, 'deduction':50},
    {'eid':1122,'name':'K.H.C.Silva', 'amount': 1000, 'epf':10, 'increments':2000, 'otRate':45, 'insuarance':500, 'tax':12, 'deduction':50},
    {'eid':1122,'name':'K.H.C.Silva', 'amount': 1000, 'epf':10, 'increments':2000, 'otRate':45, 'insuarance':500, 'tax':12, 'deduction':50},
    {'eid':1122,'name':'K.H.C.Silva', 'amount': 1000, 'epf':10, 'increments':2000, 'otRate':45, 'insuarance':500, 'tax':12, 'deduction':50},
    {'eid':1122,'name':'K.H.C.Silva', 'amount': 1000, 'epf':10, 'increments':2000, 'otRate':45, 'insuarance':500, 'tax':12, 'deduction':50},
    {'eid':1122,'name':'K.H.C.Silva', 'amount': 1000, 'epf':10, 'increments':2000, 'otRate':45, 'insuarance':500, 'tax':12, 'deduction':50},
    {'eid':1122,'name':'K.H.C.Silva', 'amount': 1000, 'epf':10, 'increments':2000, 'otRate':45, 'insuarance':500, 'tax':12, 'deduction':50},
    {'eid':1122,'name':'K.H.C.Silva', 'amount': 1000, 'epf':10, 'increments':2000, 'otRate':45, 'insuarance':500, 'tax':12, 'deduction':50},
    {'eid':1122,'name':'K.H.C.Silva', 'amount': 1000, 'epf':10, 'increments':2000, 'otRate':45, 'insuarance':500, 'tax':12, 'deduction':50},
    {'eid':1122,'name':'K.H.C.Silva', 'amount': 1000, 'epf':10, 'increments':2000, 'otRate':45, 'insuarance':500, 'tax':12, 'deduction':50},

  ];

}
