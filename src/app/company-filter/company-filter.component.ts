import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable, Subject, takeUntil } from 'rxjs';
import { CompaniesService } from 'src/app/companies/services/companies.service';
import { FilterParams } from '../types/FilterParams';
import { Unsub } from '../util/unsub.class';

@Component({
  selector: 'company-filter',
  templateUrl: './company-filter.component.html',
  styleUrls: ['./company-filter.component.scss'],
})
export class CompanyFilterComponent extends Unsub {
  @Input() types: string[] = [];
  @Input() industries: string[] = [];

  filterParamsGroup = this.fb.nonNullable.group<FilterParams>({
    search: '',
    type: '',
    industry: '',
  });

  constructor(
    private fb: FormBuilder,
    private companiesService: CompaniesService
  ) {
    super();
  }

  ngOnInit() {
    this.companiesService.filterParams$
      .pipe(takeUntil(this.unsub$))
      .subscribe((params) => {
        this.filterParamsGroup.setValue(params);
      });
  }

  updateParams() {
    this.companiesService.setFilterParams(this.filterParamsGroup.value);
  }

  resetFormValue(key: keyof FilterParams) {
    this.filterParamsGroup.controls[key]?.reset();
    this.updateParams();
  }
}
