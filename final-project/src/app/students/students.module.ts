import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsSectionTitleComponent } from './ui/students-section-title/students-section-title.component';
import { StudentsLayoutComponent } from './ui/students-layout/students-layout.component';
import { StudentsTableComponent } from './feature/students-table/students-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FullNamePipe } from './utils/full-name.pipe';
import { StudentsFormComponent } from './feature/students-form/students-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    StudentsSectionTitleComponent,
    StudentsLayoutComponent,
    StudentsTableComponent,
    FullNamePipe,
    StudentsFormComponent,
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
    ReactiveFormsModule,
    SharedModule,
  ],
  exports: [
    StudentsSectionTitleComponent,
    StudentsLayoutComponent,
    StudentsTableComponent,
  ],
})
export class StudentsModule {}
