import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import {provideRouter, Routes} from '@angular/router';
import {FundProjectList} from './app/Component/fundProject-list/fundProject-list';
import {FundProjectListItem} from './app/Component/fundProject-list-item/fundProject-list-item';

const routes: Routes = [
  {path: '', redirectTo: '/funds', pathMatch: 'full'},
  {path: 'funds', component: FundProjectList},
  {path: 'funds', component: FundProjectListItem},
  // {path: 'modify-funds', component: ModifyFundProjectList},
];
bootstrapApplication(App, {
  providers: [provideRouter(routes)]
}).then((err) => console.error(err));

