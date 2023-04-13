import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControlErrorMessagesPipe } from './feature/form-control-error-messages.pipe';

@NgModule({
  declarations: [FormControlErrorMessagesPipe],
  imports: [CommonModule],
  exports: [FormControlErrorMessagesPipe],
})
export class SharedModule {}
