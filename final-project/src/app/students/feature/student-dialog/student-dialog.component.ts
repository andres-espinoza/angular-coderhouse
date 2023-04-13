import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MyErrorStateMatcher } from 'src/app/shared/utils/CustomErrorStateMatcher';
import { capitalizeText } from 'src/app/shared/utils/stringFormat';
import { Student } from 'src/types/student';
import { DialogAction } from 'src/types/studentDialog';

@Component({
  selector: 'app-student-dialog',
  templateUrl: './student-dialog.component.html',
  styleUrls: ['./student-dialog.component.scss'],
})
export class StudentDialogComponent {
  firstNameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
  ]);
  lastNameControl = new FormControl('', [
    Validators.required,
    Validators.minLength(2),
  ]);
  ageControl = new FormControl(14, [
    Validators.required,
    Validators.min(14),
    Validators.max(100),
  ]);
  scoreControl = new FormControl(0, [
    Validators.required,
    Validators.min(0),
    Validators.max(10),
  ]);

  controls = [
    this.firstNameControl,
    this.lastNameControl,
    this.ageControl,
    this.scoreControl,
  ];

  matcher = new MyErrorStateMatcher();

  studentDialogForm = new FormGroup({
    firstName: this.firstNameControl,
    lastName: this.lastNameControl,
    age: this.ageControl,
    score: this.scoreControl,
  });

  studentDetails: Student;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Student,
    private dialogRef: MatDialogRef<StudentDialogComponent>
  ) {
    this.studentDetails = data;
    this.firstNameControl.setValue(data.firstName);
    this.lastNameControl.setValue(data.lastName);
    this.ageControl.setValue(data.age);
    this.scoreControl.setValue(data.score);
  }

  closeDialog(actionType: DialogAction) {
    this.dialogRef.close({ student: this.studentDetails, actionType });
  }

  handleSubmit(actionType: DialogAction) {
    if (this.studentDialogForm.valid) {
      this.studentDetails = {
        ...this.studentDetails,
        firstName: capitalizeText(this.firstNameControl.value as string),
        lastName: capitalizeText(this.lastNameControl.value as string),
        age: this.ageControl.value as number,
        score: this.scoreControl.value as number,
      };
      this.closeDialog(actionType);
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
