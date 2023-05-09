import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Forms/login/login.component';
import { DashboardComponent } from './Forms/dashboard/dashboard.component';
import { StudentsListComponent } from './Forms/students-list/students-list.component';
import { AddorEditComponent } from './Forms/addor-edit/addor-edit.component';
import { StudentDetailsComponent } from './Forms/student-details/student-details.component';
import { PdfComponent } from './students/pdf/pdf.component';
import { StudentsAttendenceComponent } from './Forms/students-attendence/students-attendence.component';
import { AttendenceComponent } from './Forms/attendence/attendence.component';
import { FeeComponent } from './Forms/fee/fee.component';

const routes: Routes = [{
   path: '', component: LoginComponent} ,
     { path: 'dashboard', component: DashboardComponent, },
    { path: 'dashboard/students', component: StudentsListComponent,    },
    { path: 'dashboard/students-forms', component: AddorEditComponent,  },
    { path: 'dashboard/students-edit/:id', component: StudentDetailsComponent },
    { path: 'dashboard/student/pdf', component: PdfComponent },
    { path: 'dashboard/student/attendence', component: StudentsAttendenceComponent },
    { path: 'dashboard/student/attendence-form', component: AttendenceComponent },
    { path: 'dashboard/student/fee', component: FeeComponent },


    



];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
