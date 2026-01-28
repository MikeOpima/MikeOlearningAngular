import {Component, Input} from '@angular/core';
import {MyData} from '../../Interfaces/my-data';

@Component({
  selector: 'app-fundProject-list-item',
  imports: [],
  templateUrl: './fundProject-list-item.html',
  styleUrl: './fundProject-list-item.css',
})
export class FundProjectListItem {
  @Input() fundedProjects!: MyData;

}
