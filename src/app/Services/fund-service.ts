import { Injectable } from '@angular/core';
//import mock data
import { FundData } from '../Interfaces/fund-data';
import {Observable, of, throwError} from 'rxjs';
import { fundProjectList } from '../Content/fund-list';
import {HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FundService {

  private fundProjects: FundData[] = fundProjectList;

  constructor() {}

  // READ: Get all fund projects
  getFundProjects(): Observable<FundData[]> {
    return of(this.fundProjects);
  }

  // READ: Get fund by ID
  getFundById(id: number): Observable<FundData | undefined> {
    const fundProjectList = this.fundProjects.find(fundProjectList => fundProjectList.fundId === id);
    return of(fundProjectList);
  }

  // CREATE: Add new fund project
  addFundProject(newFundProject: FundData): Observable<FundData[]> {
    this.fundProjects.push(newFundProject);
    return of(this.fundProjects);
  }

  // UPDATE: Update existing fund project
  updateFundProject(updatedFundProject: FundData): Observable<FundData[]> {
    const index = this.fundProjects.findIndex(
      fundProjectList => fundProjectList.fundId === updatedFundProject.fundId
    );

    if (index !== -1) {
      this.fundProjects[index] = updatedFundProject;
    }

    return of(this.fundProjects);
  }

  // DELETE: Remove fund by ID
  deleteFundProject(id: number): Observable<FundData[]> {
    this.fundProjects = this.fundProjects.filter(
      fundProjectList => fundProjectList.fundId !== id
    );
    return of(this.fundProjects);
  }

  // read on single fund project
  generateNewId() : number {
    return this.fundProjects.length > 0 ? Math.max(...this.fundProjects.map(fundProjectList => fundProjectList.fundId) ) +1 : 1;
  }

  private handleError(error: HttpErrorResponse) {
    console.error('API error:', error);
    return throwError(() => new Error('Server error, please try again!'));
  }

}
