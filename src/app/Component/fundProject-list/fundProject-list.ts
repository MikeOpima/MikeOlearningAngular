import {Component, OnInit} from '@angular/core';
import {FundData} from '../../Interfaces/fund-data';
import {FundProjectListItem} from '../fundProject-list-item/fundProject-list-item';
import {FundService} from '../../Services/fund-service';

@Component({
  selector: 'fundProject-list',
  templateUrl: './fundProject-list.html',
  styleUrl: './fundProject-list.css',
  imports: [
    FundProjectListItem
  ]
})
export class FundProjectList implements OnInit {
  //Placeholder values for the table
  displayedColumns: string[] = ['fundName','fundId', 'fundCode','fundManager', 'portfolioManager'];
   fundProjectList: FundData[] = [];
   error: string | null = null;    // var to hold an error message
  constructor(private fundService: FundService) {
    // constructor primarily used for dependency injection
  }


  ngOnInit():void {
    this.fundService.getFundProjects().subscribe({
      next: ( data : FundData[]) => {
        this.fundProjectList = data;
        this.error = null;  // clear any previous errors
      },
      error: err => {
        this.error = 'Error fetching fundProjectList';  // set an error message
        console.error("Error fetching fundProjectList", err);
      },
      complete: () => console.log("Fund data fetch complete!")
    });
  }
  selectedFundProject?: FundData;
  selectFundProject(selectedFundProject: FundData) {
    this.selectedFundProject = selectedFundProject;
  }


}
