import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './feature/student-list/student-list.component';

@NgModule({
  declarations: [StudentListComponent],
  imports: [CommonModule],
  exports: [StudentListComponent],
})
export class StudentModule {}
