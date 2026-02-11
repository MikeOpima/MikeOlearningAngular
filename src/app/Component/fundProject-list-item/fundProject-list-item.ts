import {Component, Input} from '@angular/core';
import {FundData} from '../../Interfaces/fund-data';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-fundProject-list-item',
  imports: [

  ],
  templateUrl: './fundProject-list-item.html',
  styleUrl: './fundProject-list-item.css',
})
export class FundProjectListItem {
  @Input() fundedProjects?: FundData;

}
