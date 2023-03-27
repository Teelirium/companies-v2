import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from 'src/Company';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  private urlForMany =
    'https://random-data-api.com/api/company/random_company?size=100';
  private urlForOne = 'https://random-data-api.com/api/company/random_company';

  constructor(private http: HttpClient) {}

  getCompanies() {
    return this.http.get<Company[]>(this.urlForMany);
  }

  getCompany(id: number) {
    return this.http.get<Company>(this.urlForOne);
  }
}
