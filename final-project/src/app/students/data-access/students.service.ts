import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import studentsMock from '../../../__mock__/students/students.json';
import { Student } from 'src/types/student';

@Injectable({
  providedIn: 'root',
})
export class StudentsService {
  getMockStudents() {
    return new Observable<Student[]>((observer) => {
      setTimeout(() => {
        observer.next(studentsMock);
        observer.complete();
      }, 2000);
    });
  }
}
