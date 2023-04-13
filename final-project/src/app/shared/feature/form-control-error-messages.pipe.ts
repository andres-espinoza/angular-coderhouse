import { Pipe, PipeTransform } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Pipe({
  name: 'formControlErrorMessages',
})
export class FormControlErrorMessagesPipe implements PipeTransform {
  transform(errors: ValidationErrors | null | undefined): string {
    if (!errors) return '';
    if (errors['required']) return 'Campo requerido';
    if (errors['minlength'])
      return `El mínimo de caracteres es ${errors['minlength']['requiredLength']}`;
    if (errors['min']) return `El valor mínimo es de ${errors['min']['min']}`;
    if (errors['max']) return `El valor máximo es de ${errors['max']['max']}`;
    return '';
  }
}
