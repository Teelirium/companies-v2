import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform<T>(array: T[], predicate: (element: T) => boolean) {
    return array.filter(predicate);
  }
}
