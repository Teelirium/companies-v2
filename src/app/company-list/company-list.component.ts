import { Component } from '@angular/core';
import { Company } from 'src/app/types/Company';
import { CompaniesService } from '../companies.service';

@Component({
  selector: 'company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent {
  companies: Company[] = [];
  orderParams!: [keyof Company, 'asc' | 'desc'];
  constructor(private companiesService: CompaniesService) {}
  ngOnInit() {
    this.getCompanies();
    this.getOrderParams();
  }
  getCompanies() {
    this.companiesService.getCompanies().subscribe((companies) => {
      this.companies = companies;
    });
  }
  getOrderParams() {
    return this.companiesService.orderParams.subscribe((params) => {
      this.orderParams = params;
    });
  }
}
