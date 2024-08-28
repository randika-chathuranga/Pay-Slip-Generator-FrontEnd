import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { AngularEditorModule } from '@kolkov/angular-editor';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { PasswordChangeComponent } from './login/password-change/password-change.component';
import { WelcomeBackgroundComponent } from './login/welcome-background/welcome-background.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { ShowPayslipsComponent } from './dashboard/show-payslips/show-payslips.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HtppinterceptorService } from './htppinterceptor.service';
import { HrdashboardComponent } from './dashboard/hrdashboard/hrdashboard.component';
import { ChartsComponent } from './dashboard/charts/charts.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { OwnerSelectTemplateComponent } from './payslip-management/owner-select-template/owner-select-template.component';
import { OwnerCreateTemplateComponent } from './payslip-management/owner-create-template/owner-create-template.component';
import { HrViewPayslipsComponent } from './dashboard/hr-view-payslips/hr-view-payslips.component';
import { EmployeeDashboardComponent } from './dashboard/employee-dashboard/employee-dashboard.component';
import { MonthlyPayslipComponent } from './dashboard/monthly-payslip/monthly-payslip.component';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';
import { EmprequestComponent } from './dashboard/emprequest/emprequest.component';
import { HrViewRequestComponent } from './dashboard/hr-view-request/hr-view-request.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { InitialDashboardComponent } from './dashboard/initial-dashboard/initial-dashboard.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    PasswordChangeComponent,
    WelcomeBackgroundComponent,
    ForgotPasswordComponent,
    ShowPayslipsComponent,
    HrdashboardComponent,
    ChartsComponent,
    NavbarComponent,
    OwnerSelectTemplateComponent,
    OwnerCreateTemplateComponent,
    HrViewPayslipsComponent,
    EmployeeDashboardComponent,
    MonthlyPayslipComponent,
    SidenavComponent,
    EmprequestComponent,
    HrViewRequestComponent,
    NotfoundComponent,
    InitialDashboardComponent,
    AddEmployeeComponent,
   
   

  

    
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    AngularEditorModule,
    MatDialogModule,
    
    
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: HtppinterceptorService, 
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddEmployeeComponent]
})
export class AppModule { 
  
}
