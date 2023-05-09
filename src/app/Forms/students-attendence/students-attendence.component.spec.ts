import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentsAttendenceComponent } from './students-attendence.component';

describe('StudentsAttendenceComponent', () => {
  let component: StudentsAttendenceComponent;
  let fixture: ComponentFixture<StudentsAttendenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentsAttendenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentsAttendenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
