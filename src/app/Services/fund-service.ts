import { Injectable } from '@angular/core';
//import mock data
import { FundData } from '../Interfaces/fund-data';
import {Observable, of, throwError} from 'rxjs';

import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FundService {
   private apiUrl: 'api/students';
   private fundList: FundData[] = fundProjectList;

  constructor(private http: HttpClient) {}

  // READ: Get all fund projects
  getFundProjects(): Observable<FundData[]> {
    return of(this.fundList);
  }

  // READ: Get fund by ID
  getFundById(id: number): Observable<FundData | undefined> {
    const fundProjectList = this.fundList.find(fundProjectList => fundProjectList.fundId === id);
    return of(fundProjectList);
  }

  // CREATE: Add new fund project
  addFundProject(newFundProject: FundData): Observable<FundData[]> {
    this.fundList.push(newFundProject);
    return of(this.fundList);
  }

  // UPDATE: Update existing fund project
  updateFundProject(updatedFundProject: FundData): Observable<FundData[]> {
    const index = this.fundList.findIndex(
      fundProjectList => fundProjectList.fundId === updatedFundProject.fundId
    );

    if (index !== -1) {
      this.fundList[index] = updatedFundProject;
    }

    return of(this.fundList);
  }

  // DELETE: Remove fund by ID
  deleteFundProject(id: number): Observable<FundData[]> {
    this.fundList = this.fundList.filter(
      fundProjectList => fundProjectList.fundId !== id
    );
    return of(this.fundList);
  }

  // read on single fund project
  generateNewId() : number {
    return this.fundList.length > 0 ? Math.max(...this.fundList.map(fundProjectList => fundProjectList.fundId) ) +1 : 1;
  }

  private handleError(error: HttpErrorResponse) {
    console.error('API error:', error);
    return throwError(() => new Error('Server error, please try again!'));
  }

}
