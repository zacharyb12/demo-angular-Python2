import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tofarheneit'
})
export class TofarheneitPipe implements PipeTransform {

  transform(value: unknown): unknown {
    if(typeof value === 'number'){
      return (value * 9/5) + 32;
    }
    return value;
  }

}
