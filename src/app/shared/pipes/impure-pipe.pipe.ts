import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impurePipe',
  pure: false         // works with change detection -- try changing this to true and then check the o/p
})
export class ImpurePipePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
