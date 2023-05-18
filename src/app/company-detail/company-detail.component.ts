import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CompaniesService } from 'src/app/companies/services/companies.service';
import { Company } from 'src/app/companies/types/Company';

@Component({
  selector: 'company-detail',
  templateUrl: './company-detail.component.html',
  styleUrls: ['./company-detail.component.scss'],
})
export class CompanyDetailComponent {
  company$!: Observable<Company>;
  constructor(
    private companiesService: CompaniesService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.companiesService.fetchCompany(id);
    this.company$ = this.companiesService.company$;
  }
}
