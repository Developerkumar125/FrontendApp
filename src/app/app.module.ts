import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { LoginComponent } from './Forms/login/login.component';
import { DashboardComponent } from './Forms/dashboard/dashboard.component';
import { StudentsListComponent } from './Forms/students-list/students-list.component';
import { AddorEditComponent } from './Forms/addor-edit/addor-edit.component';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { StudentDetailsComponent } from './Forms/student-details/student-details.component';
import { PdfComponent } from './students/pdf/pdf.component';
import { StudentsAttendenceComponent } from './Forms/students-attendence/students-attendence.component';
import { AttendenceComponent } from './Forms/attendence/attendence.component';
import { FeeComponent } from './Forms/fee/fee.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    DashboardComponent,
    StudentsListComponent,
    AddorEditComponent,
    SidebarComponent,
    StudentDetailsComponent,
    PdfComponent,
    StudentsAttendenceComponent,
    AttendenceComponent,
    FeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     HttpClientModule,
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
