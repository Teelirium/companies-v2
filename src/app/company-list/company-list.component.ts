import { Component } from '@angular/core';
import { uniqBy } from 'lodash';
import { takeUntil } from 'rxjs';
import { CompaniesService } from 'src/app/companies/services/companies.service';
import { Company } from 'src/app/companies/types/Company';
import { FilterParams } from '../types/FilterParams';
import { OrderParams } from '../types/OrderParams';
import { Unsub } from '../util/unsub.class';

@Component({
  selector: 'company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent extends Unsub {
  companies: Company[] = [];
  orderParams!: OrderParams<Company>;
  filterParams: FilterParams = {};
  types: string[] = [];
  industries: string[] = [];

  constructor(private companiesService: CompaniesService) {
    super();
  }

  getFilterPredicate() {
    return (element: Company) => {
      if (
        this.filterParams.search &&
        !element.business_name.toLowerCase().includes(this.filterParams.search)
      ) {
        return false;
      }
      if (
        this.filterParams.industry &&
        element.industry !== this.filterParams.industry
      ) {
        return false;
      }
      if (this.filterParams.type && element.type !== this.filterParams.type) {
        return false;
      }
      return true;
    };
  }

  ngOnInit() {
    this.getCompanies();
    this.getOrderParams();
    this.getFilterParams();
  }

  private getCompanies() {
    this.companiesService.fetchCompanies();
    this.companiesService.companies$
      .pipe(takeUntil(this.unsub$))
      .subscribe((companies) => {
        this.companies = companies;
        this.types = uniqBy(companies, 'type')
          .map((c) => c.type)
          .sort();
        this.industries = uniqBy(companies, 'industry')
          .map((c) => c.industry)
          .sort();
      });
  }

  private getOrderParams() {
    return this.companiesService.orderParams$
      .pipe(takeUntil(this.unsub$))
      .subscribe((params) => {
        this.orderParams = params;
      });
  }

  private getFilterParams() {
    this.companiesService.filterParams$
      .pipe(takeUntil(this.unsub$))
      .subscribe((params) => {
        this.filterParams = params;
      });
  }
}
