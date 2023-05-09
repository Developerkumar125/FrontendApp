import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-addor-edit',
  templateUrl: './addor-edit.component.html',
  styleUrls: ['./addor-edit.component.css']
})
export class AddorEditComponent implements OnInit{

  tutorial = {
    admissionnumber: '',
    rollnumber: '',
    class:'',
    section:'',
    fristname:'',
    lastname:'',
    gender:'',
    dateofbirth:'',
    category:'',
    mobilenumber:'',
    email:'',
    admissiondate:'',
    bloodgroup:'',

  };
  submitted = false;

  constructor(private studentService: StudentsService,
        private router: Router) { }

  ngOnInit() {
  }

  saveTutorial() {
    const data = {
      admissionnumber: this.tutorial.admissionnumber,
      rollnumber: this.tutorial.rollnumber,
      class: this.tutorial.class,
      section: this.tutorial.section,
      fristname: this.tutorial.fristname,
      lastname: this.tutorial.lastname,
      gender: this.tutorial.gender,
      dateofbirth: this.tutorial.dateofbirth,
      category: this.tutorial.category,
      mobilenumber: this.tutorial.mobilenumber,
      email: this.tutorial.email,
      admissiondate: this.tutorial.admissiondate,
      bloodgroup: this.tutorial.bloodgroup,

    };

    this.studentService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
          this.router.navigate(['/dashboard/students']);
        },

        error => {
          console.log(error);
        });
  }

  newTutorial() {
    this.submitted = false;
    this.tutorial = {
      admissionnumber: '',
      rollnumber: '',
      class:'',
      section:'',
      fristname:'',
      lastname:'',
      gender:'',
      dateofbirth:'',
      category:'',
      mobilenumber:'',
      email:'',
      admissiondate:'',
      bloodgroup:'',


    };
  }

}