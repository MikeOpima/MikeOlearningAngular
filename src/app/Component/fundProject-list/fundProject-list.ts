import { Component } from '@angular/core';
import {MyData} from '../../Interfaces/my-data';
import {FundProjectListItem} from '../fundProject-list-item/fundProject-list-item';
import {FundService} from '../../Services/fund-service';

@Component({
  selector: 'fundProject-list',
  templateUrl: './fundProject-list.html',
  styleUrl: './fundProject-list.css',
  imports: [
    FundProjectListItem,
  ]
})
export class FundProjectList {
  constructor(private fundService: FundService) {
  }

}
