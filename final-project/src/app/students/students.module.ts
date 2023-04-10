import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsSectionTitleComponent } from './ui/students-section-title/students-section-title.component';

@NgModule({
  declarations: [StudentsSectionTitleComponent],
  imports: [CommonModule],
  exports: [StudentsSectionTitleComponent],
})
export class StudentsModule {}
