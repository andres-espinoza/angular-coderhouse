import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fullName',
})
export class FullNamePipe implements PipeTransform {
  transform(values: [string, string]): string {
    return `${values[0]} ${values[1]}`;
  }
}
