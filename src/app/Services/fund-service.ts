import { Injectable } from '@angular/core';
//import mock data
import { fundList } from '../Interfaces/mock-funds';
import {catchError, Observable, throwError} from 'rxjs';
import {FundData} from '../Interfaces/fund-data';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class FundService {
   // @ts-ignore
  private apiUrl: 'api/funds';
   private funds: FundData[] = fundList;

  constructor(private http: HttpClient) { }

  // READ: Get all fund projects
  getFundProjects(): Observable<FundData[]> {
    return this.http.get<FundData[]>(this.apiUrl).pipe(catchError(this.handleError));
  }

  // READ: Get fund by ID
  getFundById(id: number): Observable<FundData> {
    return this.http.get<FundData>(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError));
  }

  // CREATE: Add new fund project
  addFundProject(fundProject: FundData): Observable<FundData[]> {
    fundProject.fundId = this.generateNewId();
    return this.http.post<FundData[]>(this.apiUrl, fundProject).pipe(catchError(this.handleError));
  }

  // UPDATE: Update existing fund project
  updateFundProject(fundProject: FundData): Observable<FundData[]> {
    const url = `${this.apiUrl}/${fundProject.fundId}`;
    return this.http.post<FundData[]>(this.apiUrl, fundProject).pipe(catchError(this.handleError));
  }

  // DELETE: Remove fund by ID
  deleteFundProject(id: number): Observable<{}> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url).pipe(catchError(this.handleError));
  }

  // read on single fund project
  generateNewId() : number {
    return this.funds.length > 0 ? Math.max(...this.funds.map(fundProjectList => fundProjectList.fundId) ) +1 : 1;
  }

  private handleError(error: HttpErrorResponse) {
    console.error('API error:', error);
    return throwError(() => new Error('Server error, please try again!'));
  }

}
