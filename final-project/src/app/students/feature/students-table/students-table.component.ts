import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { Student } from 'src/types/student';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss'],
})
export class StudentsTableComponent
  implements OnInit, AfterViewInit, OnChanges
{
  @Input() data: Student[] = [];

  dataSource: MatTableDataSource<Student>;

  displayedColumns: string[] = ['id', 'fullName', 'age', 'score', 'isTopTen'];

  constructor() {
    this.dataSource = new MatTableDataSource(this.data);
  }

  @ViewChild(MatSort, { static: false }) sort!: MatSort;

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

  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngAfterViewInit() {
    this.setDataSourceSort();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataSource = new MatTableDataSource(changes['data'].currentValue);
    this.setDataSourceSort();
  }
}
