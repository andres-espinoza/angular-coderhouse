import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MyErrorStateMatcher } from 'src/app/shared/utils/CustomErrorStateMatcher';
import { Student } from 'src/types/student';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-students-form',
  templateUrl: './students-form.component.html',
  styleUrls: ['./students-form.component.scss'],
})
export class StudentsFormComponent {
  firstNameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
  ]);
  lastNameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
  ]);
  ageControl = new FormControl(null, [
    Validators.required,
    Validators.min(14),
    Validators.max(100),
  ]);
  scoreControl = new FormControl(null, [
    Validators.required,
    Validators.min(0),
    Validators.max(10),
  ]);

  matcher = new MyErrorStateMatcher();

  studentForm = new FormGroup({
    firstName: this.firstNameControl,
    lastName: this.lastNameControl,
    age: this.ageControl,
    score: this.scoreControl,
  });

  controls = [
    this.firstNameControl,
    this.lastNameControl,
    this.ageControl,
    this.scoreControl,
  ];

  @Output() newStudentEvent = new EventEmitter<Student>();

  submitForm() {
    if (this.studentForm.valid) {
      console.log('student submitted: ', {
        ...this.studentForm.value,
        id: uuidv4().split('-')[0],
        isTopTen: false,
      });

      this.newStudentEvent.emit({
        ...(this.studentForm.value as unknown as Omit<
          Student,
          'id' | 'isTopTen'
        >),
        id: uuidv4().split('-')[0],
        isTopTen: false,
      });

      this.controls.forEach((control) => {
        control.reset();
      });
    } else {
      console.warn('Invalid Student Form');
      if (this.controls.some((c) => !c.value)) {
        this.controls.forEach((c) => {
          if (!c.value) c.markAllAsTouched();
        });
        return;
      }
    }
  }
}
