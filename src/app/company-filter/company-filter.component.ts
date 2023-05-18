import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CompaniesService } from 'src/app/companies/services/companies.service';
import { FilterParams } from '../types/FilterParams';

@Component({
  selector: 'company-filter',
  templateUrl: './company-filter.component.html',
  styleUrls: ['./company-filter.component.scss'],
})
export class CompanyFilterComponent {
  @Input() types: string[] = [];
  @Input() industries: string[] = [];

  filterParams = this.fb.nonNullable.group<FilterParams>({
    search: '',
    type: '',
    industry: '',
  });

  constructor(
    private fb: FormBuilder,
    private companiesService: CompaniesService
  ) {}

  ngOnInit() {}

  updateParams() {
    this.companiesService.setFilterParams(this.filterParams.value);
  }

  resetFormValue(key: keyof FilterParams) {
    this.filterParams.controls[key]?.reset();
    this.updateParams();
  }
}
