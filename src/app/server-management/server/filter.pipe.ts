import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: "filter"})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterText: string, scope: string): any {
    value.filter( (currentValue) => {
      return currentValue[scope].toString().includes(filterText);
    });
  }

}
