import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Attendence } from 'src/app/models/attendence.model';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-attendence-details',
  templateUrl: './attendence-details.component.html',
  styleUrls: ['./attendence-details.component.css']
})
export class AttendenceDetailsComponent implements OnInit {
  @Input() viewMode = false;
  @Input() currentData: Attendence = {
    student_id: '',
    date: '',
    status: '',
    rollnumber: ''
  };
   message = '';
  classname = '';
  rollnumbers: any[] = [];
  classes: any[] = [];
  sections: any[] = [];

  constructor(
    private studentsService: StudentsService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.retrieveAllClasses();
    this.retrieveAllClassesSection();
    if (!this.viewMode) {
            this.message = '';
      this.getbyId(this.route.snapshot.params["id"]);
    }
    
 
  }

  getbyId(id: string): void {
    this.studentsService.getByIdAttendence(id).subscribe({
      next: (data) => {
        this.currentData = data;
      },
      error: (e) => console.error(e)
    });
  }

  retrieveTutorials() {
    this.studentsService.getRollNumbers().subscribe(
      (data) => {
        this.rollnumbers = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  retrieveAllClasses() {
    this.studentsService.getAllClasses().subscribe(
      (data) => {
        this.classes = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  retrieveAllClassesSection() {
    this.studentsService.getAllClassesSection().subscribe(
      (data) => {
        this.sections = data;
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  
  updateAttendance(): void {
    const data ={

      student_id:this.currentData.student_id,
      date:this.currentData.date,
      status:this.currentData.status,
      rollnumber:this.currentData.rollnumber
    }

  

    this.message = '';

    this.studentsService.updateAttedene(this.currentData.id, data)
      .subscribe({
        next: (res) => {
          console.log(res);
          // this.currentTutorial.published = status;
          this.message = res.message ? res.message : 'The status was updated successfully!';
        },
        error: (e) => console.error(e)
      });
  }

  updateTutorial(): void {
    this.message = '';

    this.studentsService.updateAttedene(this.currentData.id, this.currentData)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.message = res.message ? res.message : 'This tutorial was updated successfully!';
          this.router.navigate(['/dashboard']);

        },
        error: (e) => console.error(e)
      });
  }


}