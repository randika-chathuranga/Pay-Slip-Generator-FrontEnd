import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Owner } from './owner';
import { map } from "rxjs/operators";
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { EmployeeList } from './employeelist';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  roleAs:string | undefined;

  isAuthenticated() {
    throw new Error('Method not implemented.');
  }

  private loginUrl=environment.loginUrl;
  private forgotPasswordUrl=environment.forgotPasswordUrl;
  private otpVerificationUrl=environment.otpVerificationUrl;
  private changePasswordUrl=environment.changePasswordUrl;
  private addEmployee = environment.addEmployeeUrl;
 

  constructor(private httpClient: HttpClient) { }
  
  //save the JSON Web Token
  authenticate(owner: Owner):Observable<Owner> {
    return this.httpClient.post<any>(this.loginUrl, owner)
  }

  //remove token from local storage
  // isUserLoggedOut(){
    
  // }

  isUserLoggedIn() {
    let user = localStorage.getItem("email");
    return user!==null;
  }

  getRole() {
    let roleAs = localStorage.getItem('role');
    return roleAs;
  }

  //login user post request handling 
  loginOwner(owner: Owner){
    return this.httpClient.post(`${this.loginUrl}`,owner)
  }
  
  //adding employee details
  submitEmpDetails(employee: Employee){
    return this.httpClient.post(`${this.addEmployee}`,employee)
  }

  //forgot password post request handling
  forgotPassword(data: any): Observable<any>{
    return this.httpClient.post(`${this.forgotPasswordUrl}`,data)
  }

  //otp verification post request handling
  otpVerification(data:any):Observable<any>{
    return this.httpClient.post(`${this.otpVerificationUrl}`,data)
  }

  resetPassword(data:any):Observable<any>{
    return this.httpClient.post(`${this.changePasswordUrl}`,data)
  }

 
  //fetch email from the database
  // fetchSavedEmail(data: any): Observable<any>{
  //   return this.httpClient.get(`${this.forgotPasswordUrl}`,data)
  // }
}
