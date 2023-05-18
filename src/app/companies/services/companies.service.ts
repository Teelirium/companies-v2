import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  ReplaySubject,
  shareReplay,
  Subject,
} from 'rxjs';
import { CachedHttpClient } from 'src/app/cached-http.service';
import { Company } from 'src/app/companies/types/Company';
import { FilterParams } from 'src/app/types/FilterParams';
import { OrderParams } from 'src/app/types/OrderParams';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  private urlForMany =
    'https://random-data-api.com/api/company/random_company?size=100';
  private urlForOne = (id: number) =>
    `https://random-data-api.com/api/company/random_company?id=${id}`;

  #orderParamSubject = new BehaviorSubject<OrderParams<Company>>([
    'business_name',
    'asc',
  ]);
  orderParams$ = this.#orderParamSubject.asObservable();

  #filterParamSubject = new BehaviorSubject<FilterParams>({});
  filterParams$ = this.#filterParamSubject.pipe(
    debounceTime(300),
    distinctUntilChanged()
  );

  #companiesSubject = new ReplaySubject<Company[]>(1);
  companies$ = this.#companiesSubject.asObservable();

  #companySubject = new ReplaySubject<Company>(1);
  company$ = this.#companySubject.asObservable();

  constructor(private http: HttpClient, private cachedHttp: CachedHttpClient) {}

  fetchCompanies() {
    this.cachedHttp
      .getCached<Company[]>(this.urlForMany)
      .pipe(shareReplay(1))
      .subscribe((companies) => this.#companiesSubject.next(companies));
  }

  fetchCompany(id: number) {
    this.cachedHttp
      .getCached<Company[]>(this.urlForMany)
      .pipe(shareReplay(1))
      .subscribe((companies) => {
        const company = companies.filter((c) => c.id === id)[0];
        this.#companySubject.next(company);
      });
  }

  setOrderParams(params: OrderParams<Company>) {
    this.#orderParamSubject.next(params);
  }

  setFilterParams(params: FilterParams) {
    this.#filterParamSubject.next({
      ...params,
      search: params.search?.toLowerCase(),
    });
  }
}
