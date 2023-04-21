import { Component, OnDestroy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StudentService } from '../../data-access/student.service';
import { Subscription, delay, take, tap } from 'rxjs';

@Component({
  selector: 'app-students-view',
  templateUrl: './students-view.component.html',
  styleUrls: ['./students-view.component.scss'],
})
export class StudentsViewComponent implements OnDestroy {
  isLoading = true;
  studentsSubscription$: Subscription = this.studentsService
    .getMockStudentFromSubject()
    .pipe(
      take(1),
      delay(2000),
      tap(() => {
        this.isLoading = false;
      })
    )
    .subscribe();

  constructor(
    private _snackBar: MatSnackBar,
    private studentsService: StudentService
  ) {}

  ngOnDestroy(): void {
    this.studentsSubscription$.unsubscribe();
  }

  openSnackBar(message: string, action?: string) {
    this._snackBar.open(message, action, {
      duration: 2500,
      panelClass: ['success-snackbar'],
      verticalPosition: 'bottom',
      horizontalPosition: 'center',
    });
  }
}
