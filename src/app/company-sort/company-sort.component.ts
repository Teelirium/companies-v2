import { Component } from '@angular/core';
import { CompaniesService } from '../companies.service';
import { Company } from '../types/Company';
import { OrderParams } from '../types/OrderParams';

@Component({
  selector: 'company-sort',
  templateUrl: './company-sort.component.html',
  styleUrls: ['./company-sort.component.scss'],
})
export class CompanySortComponent {
  orderParams!: OrderParams<Company>;
  constructor(private companyService: CompaniesService) {}
  ngOnInit() {
    this.companyService.orderParams.subscribe(
      (params) => (this.orderParams = params)
    );
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
