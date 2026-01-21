import {Component} from '@angular/core';

export interface OptionalInfo {
  fundRisk?: any; //rate the risk they want (low->high)
  minInvestment?: number; // minimum amount to be invested
  managementER?: any; // %age of managing a portfolio
  intialAmount?: any;
  targetAmount?: any;
}

export interface MyData extends OptionalInfo {
  fundId: number;
  fundCode: string;
  fundName: string;
  fundManager: string;
  portfolioManager: string;
  signupDate: string;
  startPrice: number;

}

