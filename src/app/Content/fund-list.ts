import {FundProjectList} from '../Component/fundProject-list/fundProject-list';

// aka mock-data.ts

import {FundData} from '../Interfaces/fund-data';

export const fundProjectList: FundData[] = [
  {
    fundId: 1, fundCode: 'MG256', fundName: 'Jackson Park', fundManager: 'MG Asset Management Inc',
    portfolioManager: "MG Asset Management Inc", signupDate: "December 17, 2022", startPrice: 650, imgLink: "../app/Assets/funding-invest.jpg"
  },
  {
    fundId: 2, fundCode: "RB234", fundName: "Marco Polo", fundManager: "RBG Asset Management Inc",
    portfolioManager: "RBG Investments", signupDate: "January 17, 2008", startPrice: 1200, imgLink: "../app/Assets/funding-invest.jpg"
  },
  {
    fundId: 3, fundCode: "MG700", fundName: "Jacob Mitchell", fundManager: "MG Asset Management Inc",
    portfolioManager: "MG Asset Management Inc", signupDate: "March 08, 2011", startPrice: 25000, imgLink: "../app/Assets/funding-invest.jpg"
  },
  {
    fundId: 4, fundCode: "BM461", fundName: "Milly Morrison", fundManager: "BM Asset Management Inc",
    portfolioManager: "BM Asset Management Inc", signupDate: "May 08, 2011", startPrice: 2500, imgLink: "../app/Assets/funding-invest.jpg"
  },
  {
    fundId: 5, fundCode: "BM485", fundName: "Christopher Martin", fundManager: "BM Asset Management Inc",
    portfolioManager: "BM Asset Management Inc", signupDate: "February 08, 2011", startPrice: 200, imgLink: "../app/Assets/funding-invest.jpg"
  }

]
