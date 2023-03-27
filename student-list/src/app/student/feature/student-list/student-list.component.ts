import { Component, OnInit } from '@angular/core';
import { Student } from 'src/model/student';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss'],
})
export class StudentListComponent implements OnInit {
  students: Student[] = [
    new Student('DAMON', 'ALBARN', 28, true),
    new Student('GRAHAM', 'COXON', 25, false),
    new Student('ALEX', 'JAMES', 31, false),
    new Student('DAVE', 'ROWNTREE', 23, true),
    new Student('2 - D', '', 22, true),
    new Student('MURDOC', 'NICCALS', 32, false),
    new Student('Russel', 'HOBBS', 32, false),
    new Student('NOODLE', '', 19, true),
  ].sort((a, b) =>
    Number(b.isTopTen) > Number(a.isTopTen)
      ? 1
      : Number(b.isTopTen) === Number(a.isTopTen)
      ? b.age < a.age
        ? 1
        : -1
      : -1
  );
  headers = ['Name', 'Age', 'Top Ten'];
  loading: boolean = true;

  ngOnInit(): void {
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
