import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Attendence } from 'src/app/models/attendence.model';
import { Students } from 'src/app/models/students.model';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-attendence',
  templateUrl: './attendence.component.html',
  styleUrls: ['./attendence.component.css']
})
export class AttendenceComponent implements OnInit {

tutorials?: Students[];
attendence?: Attendence[];
currentTutorial: Students = {};
  currentIndex = -1;
  admissionnumber = '';
  classname= ''
  rollnumbers :any[] =[]
  classes: any[]=[]
  sections:any[] =[]

attendences={
student_id:'',
rollnumber:'',
date:'',
status:''
  }
submitted = false
  constructor(private studentsService: StudentsService ,    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.retrieveTutorials();
    this. retrieveAllCalsses()
    this.retrieveAllClassesSection()
  }

   saveAttendence() {
    const data = {
      student_id: this.attendences.student_id,
      rollnumber: this.attendences.rollnumber,
      date: this.attendences.date,
      status: this.attendences.status,
      

    };
    console.log(data,"ssss")

    this.studentsService.addAttendence(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.router.navigate(['/dashboard/']);
        },

        error => {
          console.log(error);
        });
  }
    retrieveTutorials() {
    this.studentsService.getRollNumbers()
      .subscribe(
        data => {
          this.rollnumbers = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  
     retrieveAllCalsses() {
    this.studentsService.getAllClasses()
      .subscribe(
        data => {
          this.classes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

   retrieveAllClassesSection() {
    this.studentsService.  getAllClassesSection()
      .subscribe(
        data => {
          this.sections = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  
  
}
