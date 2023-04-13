import { Component } from '@angular/core';
import studentsJSON from '../../../../__mock__/students/students.json';
import { Student } from 'src/types/student';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-students-layout',
  templateUrl: './students-layout.component.html',
  styleUrls: ['./students-layout.component.scss'],
})
export class StudentsLayoutComponent {
  studentsData: Student[] = studentsJSON;

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action?: string) {
    this._snackBar.open(message, action, {
      duration: 2500,
      panelClass: ['success-snackbar'],
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
    });
  }
  addStudent(newStudent: Student) {
    this.studentsData = [...this.studentsData, newStudent];
    this.openSnackBar(
      `${newStudent.firstName} ${newStudent.lastName} ha sido agregado`
    );
  }
}
