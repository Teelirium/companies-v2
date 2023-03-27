import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company } from 'src/Company';
import { CompaniesService } from '../companies.service';

@Component({
  selector: 'company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss'],
})
export class CompanyDetailComponent {
  company?: Company;
  constructor(
    private companiesService: CompaniesService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.companiesService.getCompany(id).subscribe((company) => {
      this.company = company;
    });
  }
}
