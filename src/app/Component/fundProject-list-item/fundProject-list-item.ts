import {Component, Input} from '@angular/core';
import {FundData} from '../../Interfaces/fund-data';
import {NgOptimizedImage} from '@angular/common';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-fundProject-list-item',
  imports: [
    RouterLink,
    RouterLinkActive

  ],
  templateUrl: './fundProject-list-item.html',
  styleUrl: './fundProject-list-item.css',
})
export class FundProjectListItem {
  @Input() fundedProjects?: FundData;

}
