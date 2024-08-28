import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { EmployeeList } from './employeelist';
import { PayslipList } from './payslip-details';
import { RequestDetails } from './requestdetails';

@Injectable({
  providedIn: 'root'
})

export class EmployeeService {

  constructor(private httpClient: HttpClient) { }
  private addEmployeeDetailsUrl = environment.addEmployeeDetailsUrl;
  private getEmployeeCountUrl = environment.getEmployeeCountUrl;
  private templates = environment.templates;
  private templateParameters = environment.templateParameters;
  private generatePdf = environment.generatePdf;
  private showrequest = environment.showrequest;
  private viewAllPayslips = environment.viewAllPayslips;
  private downloadPayslip = environment.downloadPayslip;
  private sendReq = environment.sendRequest;

  

  //adding all employee list details in owner dashboard
  addEmployeeDetails(): Observable<EmployeeList[]>{
    return this.httpClient.get<EmployeeList[]>(this.addEmployeeDetailsUrl)
  }

  //getting employee count
  employeeCount(): Observable<any>{
    return this.httpClient.get(this.getEmployeeCountUrl)
  }

  //getting tempalte designs to dropdown
  getTemplates(): Observable<any>{
    return this.httpClient.get(this.templates)
  }  

  //getting payslip template design(tempid=123)
  getTemplateParameters(templateId:string | undefined): Observable<any>{
    return this.httpClient.get(this.templateParameters + templateId); 
  }


  //download pdf from Hr to send employee
  downloadPdf(templateId:string, templateParameters:any[]): Observable<any>{
    return this.httpClient.post(this.generatePdf, {
     "templateId": templateId,
     "templateParameters": templateParameters
    }, {responseType: 'blob'});
  }

  //getting all the requests done by employee
  getRequest(): Observable<any>{
    return this.httpClient.get(this.showrequest)
  }


  //view all the payslips in HR view payslip dashboard
  getAllPayslips(): Observable<PayslipList>{
    return this.httpClient.get<PayslipList>(this.viewAllPayslips)
  }

  //download payslips
  downloadPayslips(): Observable<any>{
    return this.httpClient.get(this.downloadPayslip, {
      headers: {
        "Accept": "application/pdf"
      },
      responseType: "blob"
    })
  }


  //send request from employee
  sendEmpRequest(request: RequestDetails){
    return this.httpClient.post(`${this.sendReq}`,request)
  }





  

}
