import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Student } from 'src/types/student';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { StudentDialogComponent } from '../student-dialog/student-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { StudentDialogResult } from 'src/types/studentDialog';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss'],
})
export class StudentsTableComponent
  implements OnInit, AfterViewInit, OnChanges
{
  @Input() data: Student[] = [];
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  @Output() modifyStudent = new EventEmitter<StudentDialogResult>();

  dataSource: MatTableDataSource<Student>;

  displayedColumns: string[] = ['id', 'fullName', 'age', 'score', 'isTopTen'];

  constructor(private matDialog: MatDialog) {
    this.dataSource = new MatTableDataSource(this.data);
  }

  setDataSourceSort() {
    this.dataSource.sort = this.sort;
    this.dataSource.sortingDataAccessor = (student, columnName) => {
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
      this.modifyStudent.emit(result);
    });
  }

  generateToolTip(row: Student): string {
    return `Modificar el registro de ${row.firstName}`;
  }

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngAfterViewInit() {
    this.setDataSourceSort();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.data = changes['data'].currentValue;
    this.dataSource = new MatTableDataSource(this.data);
    this.setDataSourceSort();
  }
}
