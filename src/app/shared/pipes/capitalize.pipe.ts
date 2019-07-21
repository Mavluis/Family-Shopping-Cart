import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})

/* Change the first letter in capital letters. */

export class CapitalizePipe implements PipeTransform {
  transform(value: any): any {
    return value.split('')[0].toUpperCase() + value.slice(1);
  }
}
