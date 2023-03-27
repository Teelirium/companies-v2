import { Pipe, PipeTransform } from '@angular/core';
import { orderBy } from 'lodash';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
  transform<T>(array: T[], key?: keyof T, order: 'desc' | 'asc' = 'desc') {
    return orderBy(array, [key], [order]) as T[];
  }
}
