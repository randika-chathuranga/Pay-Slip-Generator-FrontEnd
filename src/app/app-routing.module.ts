import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { PasswordChangeComponent } from './login/password-change/password-change.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { ShowPayslipsComponent } from './dashboard/show-payslips/show-payslips.component';
import { AuthGuard } from './auth-guard.service';
import { HrdashboardComponent } from './dashboard/hrdashboard/hrdashboard.component';
import { ChartsComponent } from './dashboard/charts/charts.component';
import { OwnerSelectTemplateComponent } from './payslip-management/owner-select-template/owner-select-template.component';
// import { SidenavComponent } from './navbar/sidenav/sidenav.component';
import { HrViewPayslipsComponent } from './dashboard/hr-view-payslips/hr-view-payslips.component';
import { EmployeeDashboardComponent } from './dashboard/employee-dashboard/employee-dashboard.component';
import { MonthlyPayslipComponent } from './dashboard/monthly-payslip/monthly-payslip.component';
import { EmprequestComponent } from './dashboard/emprequest/emprequest.component';
import { HrViewRequestComponent } from './dashboard/hr-view-request/hr-view-request.component';
import { RoleGuard } from './role.guard';
import { NotfoundComponent } from './notfound/notfound.component';
import { InitialDashboardComponent } from './dashboard/initial-dashboard/initial-dashboard.component';




const routes: Routes = [
  {path: '', redirectTo:'owner-dashboard', pathMatch:'full'},
  {path: 'login', component: LoginFormComponent},  
  {path:'password', component: PasswordChangeComponent},
  {path:'forgot-password', component: ForgotPasswordComponent},
  {path:'owner-dashboard', component: ShowPayslipsComponent, canActivate: [AuthGuard], data:{roles:['OWNER','ADMIN']}},
  // {path: 'owner-dashboard', component: ShowPayslipsComponent},
  {path: 'hr-dashboard', component:HrdashboardComponent,data:{roles:['ADMIN']}},
  // {path: 'chart', component:ChartsComponent},
  // {path: 'select-template', component:OwnerSelectTemplateComponent},
  {path: 'hr-view-payslips', component:HrViewPayslipsComponent, canActivate: [AuthGuard], data:{roles:['ADMIN']}},
  {path: 'employee-dashboard', component:EmployeeDashboardComponent, canActivate: [AuthGuard], data:{roles:['EMPLOYEE']}},
  {path: 'generate-payslip', component:MonthlyPayslipComponent,data:{roles:['ADMIN']}},
  {path: 'emp-request', component:EmprequestComponent, data:{roles:['EMPLOYEE']}},
  {path: 'hr-view-request', component:HrViewRequestComponent, data:{roles:['ADMIN']}},
  {path: 'not-found', component: NotfoundComponent},
  {path: 'dashboard', component: InitialDashboardComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
