import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class ConvertEthPipe implements PipeTransform {

  transform(value: string | number, roundingSize?: number): string {

    roundingSize = roundingSize || 6;
    value = Number(value);
    
      if (!value) {
          return '0'
      }
  
      if (value > 1e-3) {
          return `${ Number(value.toFixed(roundingSize)) } ETH`;
      }
  
      if (value > 1e-11) {
          return `${ Number((value * 1e9).toFixed(roundingSize)) } Gwei`;
      }
  
      if (value <= 1e-11) {
          return `${ Number((value * 1e18).toFixed(roundingSize)) } Wei`;
      }
    }
}