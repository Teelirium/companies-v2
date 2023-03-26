import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from 'src/Company';

@Injectable({
  providedIn: 'root',
})
export class CompaniesService {
  private url =
    'https://random-data-api.com/api/company/random_company?size=100';
  constructor(private http: HttpClient) {}
  getCompanies() {
    return this.http.get<Company[]>(this.url);
  }
}
