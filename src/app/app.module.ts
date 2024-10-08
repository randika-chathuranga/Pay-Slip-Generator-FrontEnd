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
import {MatDialogModule} from '@angular/material/dialog';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { HtppinterceptorService } from './htppinterceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PayslipManagementComponent } from './payslip-management/payslip-management.component';


@NgModule({
  declarations: [			
    AppComponent,
    AddEmployeeComponent,
      DashboardComponent,
      NotfoundComponent,
      PayslipManagementComponent
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
})
export class AppModule {

}
