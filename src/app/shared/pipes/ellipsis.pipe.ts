import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ellipsis'
})
export class EllipsisPipe implements PipeTransform {

  // transform info from one format to another
  transform(value: string, args: number): unknown {
    value = value.substr(0, args);
    return value + '...';
  }
}

