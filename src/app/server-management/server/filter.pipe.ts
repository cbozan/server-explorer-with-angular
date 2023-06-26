import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: "filter", pure: true})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterText: string, scope: string): any {
    const newValue = value.filter( (currentValue) => {
      return currentValue[scope].toString().includes(filterText);
    });
    return newValue;
  }

}
