import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberChanger'
})
export class NumberChangerPipe implements PipeTransform {

  transform(value: string, replacement: string): string {
   return value.replace(/[0-9]/g, replacement);
    // return null;
  }

}
