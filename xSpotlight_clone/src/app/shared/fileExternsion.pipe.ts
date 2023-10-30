import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileExtension',
})
export class FileExtensionPipe implements PipeTransform {
  transform(url: string): string {
    const regex = /\.([a-z0-9]+)(?:[\?#]|$)/i;
    const result = regex.exec(url);

    return result ? result[1] : 'NaN';
  }
}

