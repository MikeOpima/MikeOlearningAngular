import { Injectable } from '@angular/core';
import {FundProjectList} from '../Component/fundProject-list/fundProject-list';
import {Observable, of} from 'rxjs';
import {fundProjectList} from '../Content/fund-list';

@Injectable({
  providedIn: 'root',
})
export class FundService {
  private fundProject: FundProjectList[] = fundProjectList;
  constructor() {}
  // read
  getFundProjects(): Observable<FundProjectList[]> {
    return of (fundProjectList);  // return and observable that emits mock fund data
  }
  // adding CRUD methods
  // Create: Add user
  addFundProject(newFundProject: FundProjectList) {
    this.fundProject.push(newFundProject)
    return of(this.fundProject);
  }

  //update exsiting user
  updateFundProject(updatedFundProject: FundProjectList) {
    const index = this.fundProject.findIndex(fundProjectList => f.id === updatedFundProject.fundId)
  }
}
