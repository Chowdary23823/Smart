import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../Model/Product';

@Pipe({
  name: 'pricefilter'
})
export class PricefilterPipe implements PipeTransform {

  transform(value: any, ranges: any[]): any {
    console.log("from pipe",value);
    console.log("args are",ranges[0], ranges[1])
    if (value==null || ranges[0]==null||ranges[1]==null) {
      console.log("retrn")
      return value;
    } else {
      
      return value.filter(
        (obj:any) => obj.price >= ranges[0] && obj.price <= ranges[1]
      );
    }
  
  }
}


