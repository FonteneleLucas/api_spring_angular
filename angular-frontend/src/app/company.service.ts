import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from './company';
import { $ } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  updateEmployee(id: number, employee: Company) {
    throw new Error("Method not implemented.");
  }

  

  private baseUrl = 'http://ec2-18-222-231-85.us-east-2.compute.amazonaws.com:8082/api/company';

  constructor(private http: HttpClient) { }

  getCompanies(): Observable<Company[]>{
    return this.http.get<Company[]>(`${this.baseUrl}`);
  }

  createCompany(company: Object): Observable<Object>{
    return this.http.post(`${this.baseUrl}`, company);
  }

  deleteCompany(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getCompany(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  updateCompany(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

}
