import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Company } from 'src/app/types/Company';
import { OrderParams } from './types/OrderParams';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  private urlForMany =
    'https://random-data-api.com/api/company/random_company?size=100';
  private urlForOne = 'https://random-data-api.com/api/company/random_company';

  #orderParamSubject = new BehaviorSubject<OrderParams<Company>>([
    'business_name',
    'asc',
  ]);
  orderParams: Observable<OrderParams<Company>> =
    this.#orderParamSubject.asObservable();

  constructor(private http: HttpClient) {}

  getCompanies() {
    return this.http.get<Company[]>(this.urlForMany);
  }

  getCompany(id: number) {
    return this.http.get<Company>(this.urlForOne);
  }

  setOrderParams(params: OrderParams<Company>) {
    this.#orderParamSubject.next(params);
  }
}
