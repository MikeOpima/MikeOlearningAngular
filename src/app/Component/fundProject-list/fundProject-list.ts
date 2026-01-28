import { Component } from '@angular/core';
import {MyData} from '../../Interfaces/my-data';
import {FundProjectListItem} from '../fundProject-list-item/fundProject-list-item';

@Component({
  selector: 'fundProject-list',
  // imports: [
  //   FundProjectListItem,
  //   NgForOf,
  //   NgIf
  // ],
  templateUrl: './fundProject-list.html',
  styleUrl: './fundProject-list.css',
  imports: [
    FundProjectListItem,
  ]
})
export class FundProjectList {
  fundedProjects: MyData[] = [
    {
      fundId: 1, fundCode: 'MG256', fundName: 'Jackson Park', fundManager: 'MG Asset Management Inc',
      portfolioManager: "MG Asset Management Inc", signupDate: "December 17, 2022", startPrice: 650,
      name: "",
      code: "",
      id: 0
    },
    {
      fundId: 2, fundCode: "RB234", fundName: "Marco Polo", fundManager: "RBG Asset Management Inc",
      portfolioManager: "RBG Investments", signupDate: "January 17, 2008", startPrice: 1200,
      name: "",
      code: "",
      id: 0
    },
    {
      fundId: 3, fundCode: "MG700", fundName: "Jacob Mitchell", fundManager: "MG Asset Management Inc",
      portfolioManager: "MG Asset Management Inc", signupDate: "March 08, 2011", startPrice: 25000,
      name: "",
      code: "",
      id: 0
    },
    {
      fundId: 4, fundCode: "BM461", fundName: "Milly Morrison", fundManager: "BM Asset Management Inc",
      portfolioManager: "BM Asset Management Inc", signupDate: "May 08, 2011", startPrice: 2500,
      name: "",
      code: "",
      id: 0
    },
    {
      fundId: 5, fundCode: "RB700", fundName: "Jacob Mitchell", fundManager: "RBG Asset Management Inc",
      portfolioManager: "RBG Investments", signupDate: "November 30, 2020", startPrice: 30430,
      name: "",
      code: "",
      id: 0
    },
    {
      fundId: 6, fundCode: "ZB700", fundName: "Michelle Kalps", fundManager: "Zash Brothers Inc",
      portfolioManager: "Zash Brothers Management", signupDate: "November 30, 2021", startPrice: 3100,
      name: "",
      code: "",
      id: 0
    },
    {
      fundId: 7, fundCode: "ZB702", fundName: "Kevin Qazim", fundManager: "Zash Brothers Inc",
      portfolioManager: "Zash Brothers Management", signupDate: "November 30, 2021", startPrice: 2335,
      name: "",
      code: "",
      id: 0
    },
    {
      fundId: 8, fundCode: 'MG259', fundName: 'Pearl Carson', fundManager: 'MG Asset Management Inc',
      portfolioManager: "MG Asset Management Inc", signupDate: "July 23, 2024", startPrice: 65090,
      name: "",
      code: "",
      id: 0
    },
    {
      fundId: 9, fundCode: 'MG245', fundName: 'Dickson Hayman', fundManager: 'MG Asset Management Inc',
      portfolioManager: "MG Asset Management Inc", signupDate: "March 08, 2022", startPrice: 65090,
      name: "",
      code: "",
      id: 0
    },
  ];

  handleItemSelected(item: MyData) {
    console.log('Child emitted:',item);
  }

}
