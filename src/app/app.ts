import {Component, signal, OnInit, NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {FundProjectList} from './Component/fundProject-list/fundProject-list';
import {FundProjectListItem} from './Component/fundProject-list-item/fundProject-list-item';

import {FundService} from './Services/fund-service';
import {FundData} from './Interfaces/fund-data';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css',
  imports: [CommonModule, RouterLink, RouterLinkActive, RouterOutlet]
})

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule
    ]})


export class App {

    // @ts-ignore
  title: 'Fund Management System';

  fundProjectInfo: FundData | undefined;

  constructor(private fundService: FundService) {}

}
