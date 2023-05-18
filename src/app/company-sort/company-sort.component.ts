import { Component } from '@angular/core';
import { takeUntil } from 'rxjs';
import { CompaniesService } from 'src/app/companies/services/companies.service';
import { Company } from '../companies/types/Company';
import { OrderParams } from '../types/OrderParams';
import { Unsub } from '../util/unsub.class';

@Component({
  selector: 'company-sort',
  templateUrl: './company-sort.component.html',
  styleUrls: ['./company-sort.component.scss'],
})
export class CompanySortComponent extends Unsub {
  orderParams!: OrderParams<Company>;

  constructor(private companyService: CompaniesService) {
    super();
  }

  ngOnInit() {
    this.companyService.orderParams$
      .pipe(takeUntil(this.unsub$))
      .subscribe((params) => (this.orderParams = params));
  }

  getArrow(key: OrderParams<Company>[0]) {
    if (this.orderParams[0] !== key) {
      return '';
    }
    return this.orderParams[1] === 'asc' ? '↑' : '↓';
  }

  toggleOrder(key: OrderParams<Company>[0]) {
    if (this.orderParams[0] !== key) {
      this.companyService.setOrderParams([key, 'asc']);
    } else {
      this.companyService.setOrderParams([
        key,
        this.orderParams[1] === 'asc' ? 'desc' : 'asc',
      ]);
    }
  }
}
