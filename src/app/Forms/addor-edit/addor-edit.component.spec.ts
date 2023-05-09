import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddorEditComponent } from './addor-edit.component';

describe('AddorEditComponent', () => {
  let component: AddorEditComponent;
  let fixture: ComponentFixture<AddorEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddorEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
