import { Component } from '@angular/core';
import { uniqBy } from 'lodash';
import { Company } from 'src/app/types/Company';
import { CompaniesService } from '../companies.service';
import { FilterParams } from '../types/FilterParams';

@Component({
  selector: 'company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent {
  companies: Company[] = [];
  orderParams!: [keyof Company, 'asc' | 'desc'];
  filterParams: FilterParams = {};
  types: string[] = [];
  industries: string[] = [];

  constructor(private companiesService: CompaniesService) {}

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
    this.companiesService.getCompanies().subscribe((companies) => {
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
    return this.companiesService.orderParams.subscribe((params) => {
      this.orderParams = params;
    });
  }

  private getFilterParams() {
    this.companiesService.filterParams.subscribe((params) => {
      this.filterParams = params;
    });
  }
}
