import { Component, signal } from '@angular/core';

import {CommonModule} from '@angular/common';
import {FundProjectList} from './Component/fundProject-list/fundProject-list';



@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  standalone: true,
  styleUrl: './app.css',
  imports: [CommonModule, FundProjectList]
})
export class App {


  // Initialize the array with 6 funded projects

}
