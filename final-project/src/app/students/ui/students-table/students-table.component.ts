import { Component } from '@angular/core';
import { Student } from 'src/types/student';
import studentsData from '../../../../__mock__/students/students.json';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss'],
})
export class StudentsTableComponent {
  dataTable: Student[];
  displayedColumns: string[] = [
    'fullName',
    'age',
    'course',
    'score',
    'isTopTen',
  ];
  constructor() {
    this.dataTable = studentsData;
  }
}
