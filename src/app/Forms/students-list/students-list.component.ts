import { Component, OnInit } from '@angular/core';
import { StudentsService } from 'src/app/services/students.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Students } from 'src/app/models/students.model';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {


  tutorials?: Students[];
currentTutorial: Students = {};
  currentIndex = -1;
  admissionnumber = '';
  classname= ''

  constructor(private studentsService: StudentsService ,    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.retrieveTutorials();
  }

    retrieveTutorials() {
    this.studentsService.getAll()
      .subscribe(
        data => {
          this.tutorials = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }


  refreshList() {
    this.retrieveTutorials();
    this.currentTutorial = {};
    this.currentIndex = -1;
  }

   setActiveTutorial(tutorial: Students, index: number): void {
    this.currentTutorial = tutorial;
    this.currentIndex = index;
  }

  removeAllTutorials() {
    this.studentsService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.retrieveTutorials();
        },
        error => {
          console.log(error);
        });
  }
    getData() {
    this.searchClass();
  }
    deleteTutorial(): void {
    this.studentsService.delete(this.currentTutorial.id)
      .subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/dashboard']);
        },
        error: (e) => console.error(e)
      });
  }

 
  searchClass() {
    this.studentsService.findByTitle(this.classname,this.admissionnumber)
      .subscribe(
        data => {
          this.tutorials = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}