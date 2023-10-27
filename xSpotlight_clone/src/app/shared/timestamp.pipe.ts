import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timestampToDate',
})
export class TimestampToDatePipe implements PipeTransform {
  transform(value: number, ...args: unknown[]): string {
    if (!value) {
      return '';
    }
    const date = new Date(value * 1000);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: '2-digit',
    };
    return date.toLocaleDateString(undefined, options);
  }
}
