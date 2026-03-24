import {Component, Input, OnInit} from '@angular/core';
import {FundData} from '../../Interfaces/fund-data';
import {CurrencyPipe, NgIf, NgOptimizedImage} from '@angular/common';
import {ActivatedRoute, Router, RouterLink, RouterLinkActive} from '@angular/router';
import {FundService} from '../../Services/fund-service';

@Component({
  selector: 'app-fundProject-list-item',
  imports: [
    RouterLink,
    RouterLinkActive,
    CurrencyPipe,
    NgIf

  ],
  templateUrl: './fundProject-list-item.html',
  styleUrl: './fundProject-list-item.css',
})
export class FundProjectListItem implements OnInit {
  // Needs to be  |   undef because there won't always be a fund that's clicked on
  fund: FundData | undefined;  // fund to be displayed
  fundList: FundData[] = [];  // to store the list of students
  currentIndex: number = 0;   // to track the current index
  error: string | null = null;  // to store any errors
  constructor(
    private route: ActivatedRoute,
    private fundService: FundService,
    private router: Router
  ) { }
  //rewrote onInit to get the list of funds and the current fund
  ngOnInit(): void {
      this.fundService.getFundProjects().subscribe({
        next: (funds: FundData[]) => {
          this.fundList = funds;
          this.error = null;  // clear any previous errors

          // subscribe to paraMap changes to update the page view
          this.route.paramMap.subscribe(params => {
            const id = Number(params.get('id'));
            if (id){
              this.currentIndex = this.fundList.findIndex(funds => funds.fundId === id);
              this.fund = this.fundList[this.currentIndex];
            }
          });
        },
        error: err => {
          this.error = 'Error fetching funds list';
          console.error('Error fetching funds list: ', err);
        }
      });
  }

  // function to go back to fund-list view
  goBack(): void {
    this.router.navigate(['/funds']);
  }

  // function to move forward through array with overflow protection
  goForward(): void {
    if (this.currentIndex < this.fundList.length -1) {
      this.currentIndex++;
      this.router.navigate(['/funds', this.fundList[this.currentIndex].fundId]);
    }
  }

  // function to move backward through array with overflow protection
  goBackward(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.router.navigate(['/funds', this.fundList[this.currentIndex].fundId]);
    }
  }

  @Input() fundedProjects?: FundData;

}
