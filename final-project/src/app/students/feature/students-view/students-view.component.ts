import { Component, OnInit } from '@angular/core';
import { Student } from 'src/types/student';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StudentDialogResult } from 'src/types/studentDialog';
import { StudentsService } from '../../data-access/students.service';

@Component({
  selector: 'app-students-view',
  templateUrl: './students-view.component.html',
  styleUrls: ['./students-view.component.scss'],
})
export class StudentsViewComponent implements OnInit {
  studentsData: Student[] = [];
  isLoading = true;

  constructor(
    private _snackBar: MatSnackBar,
    private studentsService: StudentsService
  ) {}

  ngOnInit(): void {
    this.studentsService.getMockStudents().subscribe({
      next: (students) => (this.studentsData = students),
      error: (error) => this.openSnackBar(error),
      complete: () => (this.isLoading = false),
    });
  }

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

  modifyStudent(result: StudentDialogResult) {
    const { student, actionType } = result;
    const studentIndex = this.studentsData.findIndex(
      (s) => s.id === student.id
    );
    const [modifiedStudent] = this.studentsData.splice(studentIndex, 1);
    if (actionType === 'MODIFY') {
      this.studentsData = [...this.studentsData, student];
      this.openSnackBar(
        `${modifiedStudent.firstName} ${modifiedStudent.lastName} se ha actualizado ✔ con éxito`
      );
      return;
    }
    if (actionType === 'DELETE') {
      this.studentsData = [...this.studentsData];
      this.openSnackBar(
        `${modifiedStudent.firstName} ${modifiedStudent.lastName} se ha eliminado ✖ con éxito`
      );
      return;
    }
  }
}
