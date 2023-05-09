import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeeDetails } from 'src/app/models/feeDetails.model';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-fee',
  templateUrl: './fee.component.html',
  styleUrls: ['./fee.component.css']
})
export class FeeComponent implements OnInit {

  

  feeCollection?: FeeDetails[];
currentTutorial: FeeDetails  = {};
  currentIndex = -1;

  date=''
  

  constructor(private studentsService: StudentsService ,    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.retrieveTutorials();
  }

    retrieveTutorials() {
    this.studentsService.getFeeList()
      .subscribe(
        data => {
          this.feeCollection = data;
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

   setActiveTutorial(feeCollection: FeeDetails, index: number): void {
    this.currentTutorial = feeCollection;
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
    
 
  searchClass() {
    this.studentsService.getFeeListSearch(this.date)
      .subscribe(
        data => {
          this.feeCollection = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }
}