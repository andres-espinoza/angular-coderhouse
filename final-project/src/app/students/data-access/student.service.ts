import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from } from 'rxjs';
import studentsMock from '../../../__mock__/students/students.json';
import { Student } from 'src/types/student';
import { StudentDialogResult } from 'src/types/studentDialog';

export interface MockRequestState<T> {
  isLoading: boolean;
  value?: T;
  error?: Error;
}

@Injectable({
  providedIn: 'root',
})
export class StudentService {
  private studentsData$: BehaviorSubject<Student[]> = new BehaviorSubject<
    Student[]
  >([]);
  constructor() {
    setTimeout(() => {
      this.studentsData$.next(studentsMock);
    }, 2000);
  }

  // Example: How to create a simple Observable
  getMockStudents() {
    return new Observable<Student[]>((observer) => {
      setTimeout(() => {
        observer.next(studentsMock);
        observer.complete();
      }, 2000);
    });
  }

  // Example: How to create a simple Observable from a Promise
  getMockStudentsFromPromise() {
    const mockPromise = new Promise<Student[]>((resolve) => {
      setTimeout(() => {
        resolve(studentsMock);
      }, 2000);
    });
    return from(mockPromise);
  }

  getMockStudentFromSubject() {
    return this.studentsData$.asObservable();
  }

  modifyStudentsFromSubject(modalResult: StudentDialogResult) {
    const { student, actionType } = modalResult;
    const studentIndex = this.studentsData$.value.findIndex(
      ({ id }) => id === student.id
    );
    if (actionType === 'MODIFY') {
      this.studentsData$.value[studentIndex] = student;
      this.studentsData$.next(this.studentsData$.value);
    } else {
      this.studentsData$.next(
        this.studentsData$.value.filter((_s, idx) => idx !== studentIndex)
      );
    }
  }

  createNewStudent(data: Student) {
    this.studentsData$.next([...this.studentsData$.value, data]);
  }
}
