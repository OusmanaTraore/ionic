import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtreur'
})
export class FiltreurPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return value + " GK ";
  }

}
