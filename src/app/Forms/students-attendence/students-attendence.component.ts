import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Attendence } from 'src/app/models/attendence.model';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-students-attendence',
  templateUrl: './students-attendence.component.html',
  styleUrls: ['./students-attendence.component.css']
})
export class StudentsAttendenceComponent {


  attendances?: Attendence[];
currentTutorial: Attendence = {};
  currentIndex = -1;
  admissionnumber = '';
  classname= ''
  date=''

  constructor(private studentsService: StudentsService ,    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.retrieveAttendences();

  }

    retrieveAttendences() {

    this.studentsService.getAllAttendence()
      .subscribe(
        data => {
          this.attendances = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  
   refreshList() {
    this.retrieveAttendences();
    this.currentTutorial = {};
    this.currentIndex = -1;
  }

   setActiveTutorial(attendances: Attendence, index: number): void {
    this.currentTutorial = attendances;
    this.currentIndex = index;
  }


  searchClass() {
    this.studentsService.getAllAttendanceBasedonDate(this.date)
      .subscribe(
        data => {
          this.attendances = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
  

 

} 
