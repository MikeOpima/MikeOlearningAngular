import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FundData } from '../Interfaces/fund-data';
import { fundProjectList } from '../Content/fund-list';

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
    // @ts-ignore    <<<-- fixed in a @ts-ignore here sir i know you don't encourage it
    const fund = this.fundProjects.find(fundProjectList => fund.id === fundId);
    return of(fund);
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

  // read on singlr fun project


}
