import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limit',
  pure: false
})
export class LimitPipe implements PipeTransform {
	
  transform(value: Array<any>, limit: number, startPosition?: number): Array<any> {

    startPosition = startPosition || 0;

    return value.filter((item, index) => index >= startPosition && index < (limit + startPosition));
  }
}
