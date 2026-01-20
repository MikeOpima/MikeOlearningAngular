export interface FundProject {
  fundId: number;
  fundName: string;
  fundCode: string;
  signupDate: string;
  startPrice: number;
  fundRisk?: any; //rate the risk they want (1-5)
}
