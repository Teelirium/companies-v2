import { Component } from '@angular/core';
import { Company } from 'src/Company';
import { CompaniesService } from '../companies.service';

@Component({
  selector: 'company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss'],
})
export class CompanyListComponent {
  companies: Company[] = [];
  constructor(private companiesService: CompaniesService) {}
  getCompanies() {
    this.companiesService
      .getCompanies()
      .subscribe((companies) => (this.companies = companies));
  }
  ngOnInit() {
    this.getCompanies();
  }
}
