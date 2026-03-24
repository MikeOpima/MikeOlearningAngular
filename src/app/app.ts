import { Component, signal, OnInit } from '@angular/core';

import {CommonModule} from '@angular/common';
import {FundProjectList} from './Component/fundProject-list/fundProject-list';
import {FundProjectListItem} from './Component/fundProject-list-item/fundProject-list-item';

import {FundService} from './Services/fund-service';
import {FundData} from './Interfaces/fund-data';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css',
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet]
})
export class App {



  fundProjectInfo: FundData | undefined;

  constructor(private fundService: FundService) {}

}
