import { Component, signal, OnInit } from '@angular/core';

import {CommonModule} from '@angular/common';
import {FundProjectList} from './Component/fundProject-list/fundProject-list';
import {FundProjectListItem} from './Component/fundProject-list-item/fundProject-list-item';
import {fundProjectList} from './Content/fund-list';
import {FundService} from './Services/fund-service';
import {FundData} from './Interfaces/fund-data';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css',
  imports: [CommonModule, FundProjectListItem, FundProjectList, RouterLink, RouterLinkActive, RouterOutlet]
})
export class App {

  protected readonly fundProjectList = fundProjectList;

  fundProjectInfo: FundData | undefined;

  constructor(private fundService: FundService) {}

}
