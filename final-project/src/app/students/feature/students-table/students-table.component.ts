import { Component, ViewChild } from '@angular/core';
import { Student } from 'src/types/student';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { StudentDialogComponent } from '../student-dialog/student-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { StudentDialogResult } from 'src/types/studentDialog';
import { StudentService } from '../../data-access/student.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss'],
})
export class StudentsTableComponent {
  @ViewChild(MatSort, { static: false }) sort!: MatSort;

  private dataSource = new MatTableDataSource<Student>();

  matTableDataSource$: Observable<MatTableDataSource<Student>> =
    this.studentsService.getMockStudentFromSubject().pipe(
      map((students) => {
        const dataSource = this.dataSource;
        dataSource.data = students;
        this.setDataSourceSort(dataSource);
        return dataSource;
      })
    );

  displayedColumns: string[] = ['id', 'fullName', 'age', 'score', 'isTopTen'];

  constructor(
    private matDialog: MatDialog,
    private studentsService: StudentService
  ) {}

  setDataSourceSort(dataSource: MatTableDataSource<Student>) {
    dataSource.sort = this.sort;
    dataSource.sortingDataAccessor = (student, columnName) => {
      switch (columnName) {
        case 'fullName':
          return `${student.firstName} ${student.lastName}`;
        case 'isTopTen':
          return student.isTopTen ? 1 : 0;
        default:
          return student[columnName as keyof Omit<Student, 'isTopTen'>];
      }
    };
  }

  openDialog(row: Student): void {
    const dialogRef = this.matDialog.open(StudentDialogComponent, {
      data: row,
    });
    dialogRef.afterClosed().subscribe((result: StudentDialogResult) => {
      this.studentsService.modifyStudentsFromSubject(result);
    });
  }

  generateToolTip(row: Student): string {
    return `Modificar el registro de ${row.firstName}`;
  }
}
