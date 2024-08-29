import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { EmployeeService } from 'src/app/employee.service';
import { RequestDetails } from 'src/app/requestdetails';

@Component({
  selector: 'app-emprequest',
  templateUrl: './emprequest.component.html',
  styleUrls: ['./emprequest.component.scss']
})

export class EmprequestComponent implements OnInit {

  requestEmp: RequestDetails = new RequestDetails;

  constructor(private employeeService: EmployeeService) { }

  ngOnInit(): void {
  }

  sendRequestForm = new FormGroup({
    reqId: new FormControl('',[Validators.required]),
    eid: new FormControl('',[Validators.required]),
    severityStatus: new FormControl('',[Validators.required]),
    context: new FormControl('',[Validators.required]),
    createdDate: new FormControl('',[Validators.required]),
    solvedDate: new FormControl('',[Validators.required]),
    reqStatus: new FormControl('',[Validators.required]),

  })

  get reqId(){
    return this.sendRequestForm.get('reqId')
  }

  get eid(){
    return this.sendRequestForm.get('eid');
  }

  get severityStatus(){
    return this.sendRequestForm.get('severityStatus');
  }

  get context(){
    return this.sendRequestForm.get('context');
  }

  get createdDate(){
    return this.sendRequestForm.get('createdDate');
  }

  get solvedDate(){
    return this.sendRequestForm.get('solvedDate');
  }


  get reqStatus(){
    return this.sendRequestForm.get('reqStatus');
  }






  sendRequestDetails(){
    this.employeeService.sendEmpRequest(this.requestEmp).subscribe((data)=>{
      return true;
    },error=>console.log(error))
  }

}
