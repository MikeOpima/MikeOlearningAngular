import { FundData } from '../Interfaces/fund-data';
import {InMemoryDbService} from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {
  createDb():{funds: FundData[]} {

    /*
    inside the method, a constant array named fundProjects is defined
    containing several FundData objects. Each FundData object represents a
    FundProject with properties such as fundId, fundCode, fundManager, ....
     */

    const funds: FundData[] = [
      {
        fundId: 1, fundCode: 'MG256', fundName: 'Jackson Park', fundManager: 'MG Asset Management Inc',
        portfolioManager: "MG Asset Management Inc", signupDate: "December 17, 2022", startPrice: 650.89, imgLink: "../app/Assets/funding-invest.jpg"
      },
      {
        fundId: 2, fundCode: "RB234", fundName: "Marco Polo", fundManager: "RBG Asset Management Inc",
        portfolioManager: "RBG Investments", signupDate: "January 17, 2008", startPrice: 1200.76, imgLink: "../app/Assets/funding-invest.jpg"
      },
      {
        fundId: 3, fundCode: "MG700", fundName: "Jacob Mitchell", fundManager: "MG Asset Management Inc",
        portfolioManager: "MG Asset Management Inc", signupDate: "March 08, 2011", startPrice: 25000.45, imgLink: "../app/Assets/funding-invest.jpg"
      },
      {
        fundId: 4, fundCode: "BM461", fundName: "Milly Morrison", fundManager: "BM Asset Management Inc",
        portfolioManager: "BM Asset Management Inc", signupDate: "May 08, 2011", startPrice: 2567.90, imgLink: "../app/Assets/funding-invest.jpg"
      },
      {
        fundId: 5, fundCode: "BM485", fundName: "Christopher Martin", fundManager: "BM Asset Management Inc",
        portfolioManager: "BM Asset Management Inc", signupDate: "February 08, 2011", startPrice: 256.86, imgLink: "../app/Assets/funding-invest.jpg"
      }
    ];

    return {funds};
  }

}
