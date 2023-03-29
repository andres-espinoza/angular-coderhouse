import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentListComponent } from './feature/student-list/student-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [StudentListComponent],
  imports: [CommonModule, SharedModule],
  exports: [StudentListComponent],
})
export class StudentModule {}
