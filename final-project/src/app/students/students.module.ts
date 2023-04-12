import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsSectionTitleComponent } from './ui/students-section-title/students-section-title.component';
import { StudentsLayoutComponent } from './ui/students-layout/students-layout.component';
import { StudentsTableComponent } from './ui/students-table/students-table.component';
import { MatTableModule } from '@angular/material/table';
import { FullNamePipe } from './utils/full-name.pipe';

@NgModule({
  declarations: [
    StudentsSectionTitleComponent,
    StudentsLayoutComponent,
    StudentsTableComponent,
    FullNamePipe,
  ],
  imports: [CommonModule, MatTableModule],
  exports: [
    StudentsSectionTitleComponent,
    StudentsLayoutComponent,
    StudentsTableComponent,
  ],
})
export class StudentsModule {}
