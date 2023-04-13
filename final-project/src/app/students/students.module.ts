import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsSectionTitleComponent } from './ui/students-section-title/students-section-title.component';
import { StudentsViewComponent } from './feature/students-layout/students-view.component';
import { StudentsTableComponent } from './feature/students-table/students-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FullNamePipe } from './utils/full-name.pipe';
import { StudentsFormComponent } from './feature/students-form/students-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { StudentDialogComponent } from './feature/student-dialog/student-dialog.component';

@NgModule({
  declarations: [
    StudentsSectionTitleComponent,
    StudentsViewComponent,
    StudentsTableComponent,
    FullNamePipe,
    StudentsFormComponent,
    StudentDialogComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [
    StudentsSectionTitleComponent,
    StudentsViewComponent,
    StudentsTableComponent,
  ],
})
export class StudentsModule {}
