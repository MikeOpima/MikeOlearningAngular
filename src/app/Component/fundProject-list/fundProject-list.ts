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
   fundProjectList: FundData[] = [];
  constructor(private fundService: FundService) {
  }



  ngOnInit():void {
    this.fundService.getFundProjects().subscribe({
      next: ( data : FundData[]) => this.fundProjectList = data,
      error: err => console.error("Error fetching fund data",err),
      complete:() => console.log('Fund data fetch complete!')
    })

  }


}
