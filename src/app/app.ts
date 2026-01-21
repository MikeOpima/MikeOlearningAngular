import { Component, signal } from '@angular/core';
// @ts-ignore
import { RouterOutlet } from "@angular/router";
import {MyData} from './Interfaces/my-data';
import {CommonModule} from '@angular/common';


// @ts-ignore
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css',
  imports: [CommonModule]
})
export class App {
  fName = 'Mike';
  GOD: string = 'YHWH';
  currentYear: number = 2026;
  isLoggedIn?: boolean = true;

  // Initialize the array with 6 funded projects
  fundedProjects: MyData[] = [
    {
      fundId: 1, fundCode: 'MG256', fundName: 'Jackson Park', fundManager: 'MG Asset Management Inc',
      portfolioManager: "MG Asset Management Inc",
      signupDate: "December 17, 2022",
      startPrice: 650
    },
    {
      fundId: 2,
      fundCode: "RB234",
      fundName: "Marco Polo",
      fundManager: "RBG Asset Management Inc",
      portfolioManager: "RBG Investments",
      signupDate: "January 17, 2008",
      startPrice: 1200
    },
    {
      fundId: 3,
      fundCode: "MG700",
      fundName: "Jacob Mitchell",
      fundManager: "MG Asset Management Inc",
      portfolioManager: "MG Asset Management Inc",
      signupDate: "March 08, 2011",
      startPrice: 25000
    },
    {
      fundId: 4,
      fundCode: "BM461",
      fundName: "Milly Morrison",
      fundManager: "BM Asset Management Inc",
      portfolioManager: "BM Asset Management Inc",
      signupDate: "May 08, 2011",
      startPrice: 2500
    },
    {
      fundId: 5,
      fundCode: "RB700",
      fundName: "Jacob Mitchell",
      fundManager: "RBG Asset Management Inc",
      portfolioManager: "RBG Investments",
      signupDate: "November 30, 2020",
      startPrice: 30430
    },
    {
      fundId: 6,
      fundCode: "ZB700",
      fundName: "Michelle Kalps",
      fundManager: "Zash Brothers Inc",
      portfolioManager: "Zash Brothers Management",
      signupDate: "November 30, 2021",
      startPrice: 3100
    }
    ];

}
