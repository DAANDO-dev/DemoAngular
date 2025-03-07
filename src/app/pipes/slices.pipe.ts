import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceArray'
})
export class SlicesPipe implements PipeTransform {

  transform(tableau: Array<any>, nb: number): Array<any> {
    return tableau.slice(0,nb);
  }

}