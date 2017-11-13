import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(array: Array<any>, field: string, order: 'asc' | 'desc'): Array<any> {

    return [].concat(array).sort((a, b) => {

      if (order === 'asc') {
        return a[field] > b[field] ? 1 : -1;
      }

      return a[field] < b[field] ? 1 : -1;
    });
  }
}
