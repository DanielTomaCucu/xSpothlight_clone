import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trimText',
})
export class TrimTextPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    if (!value || value.length <= 10) {
      // Adjust this length as necessary
      return value;
    }
    const start = value.substring(0, 6); // Get the first 5 characters
    const end = value.substring(value.length - 6); // Get the last 5 characters
    return `${start}...${end}`;
  }
}
