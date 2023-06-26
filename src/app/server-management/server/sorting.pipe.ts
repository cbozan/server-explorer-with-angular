import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: "sorting"})
export class SortingPipe implements PipeTransform {
  transform(value: any, scope: string, orderDirection: boolean): any {
    let orderDirectionOperator = 1;
    if (!orderDirection) {
      orderDirectionOperator = -1;
    }

    const newValue = value.sort( (a, b) => {
      if (a[scope] < b[scope]) {
        return -1 * orderDirectionOperator;
      } else if (a[scope] > b[scope]) {
        return orderDirectionOperator;
      }

      return 0;
    });

    return newValue;
  }

}
