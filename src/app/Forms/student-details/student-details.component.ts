import { Component,OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Students } from 'src/app/models/students.model';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent implements OnInit {
  @Input() viewMode = false;

  @Input() currentTutorial: Students = {
    admissionnumber: '',
    rollnumber: '',
    classname:'',
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
    // published: false
  };
  
  message = '';

  constructor(
    private studentService: StudentsService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    if (!this.viewMode) {
      this.message = '';
      this.getTutorial(this.route.snapshot.params["id"]);
    }
  }

  getTutorial(id: string): void {
    this.studentService.get(id)
      .subscribe({
        next: (data) => {
          this.currentTutorial = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  updatePublished(): void {
    const data = {
      admissionnumber: this.currentTutorial.admissionnumber,
      rollnumber: this.currentTutorial.rollnumber,
      classname:this.currentTutorial.classname,
      section:this.currentTutorial.section,
      fristname:this.currentTutorial.fristname,
      lastname:this.currentTutorial.lastname,
      gender:this.currentTutorial.gender,
      dateofbirth:this.currentTutorial.dateofbirth,
      category:this.currentTutorial.category,
      mobilenumber:this.currentTutorial.mobilenumber,
      email:this.currentTutorial.email,
      admissiondate:this.currentTutorial.admissiondate,
      bloodgroup:this.currentTutorial.bloodgroup,
    };

    this.message = '';

    this.studentService.update(this.currentTutorial.id, data)
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

    this.studentService.update(this.currentTutorial.id, this.currentTutorial)
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