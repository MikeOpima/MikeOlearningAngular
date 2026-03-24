import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import {provideRouter, Routes} from '@angular/router';
import {FundProjectList} from './app/Component/fundProject-list/fundProject-list';
import {FundProjectListItem} from './app/Component/fundProject-list-item/fundProject-list-item';
import ModifyListItemComponent from './app/Component/modify-list-item.component/modify-list-item.component';
import {PageNotFoundComponent} from './app/Component/page-not-found.component/page-not-found.component';
import {FormComponent} from './app/Component/form.component/form.component';
import {provideHttpClient} from '@angular/common/http';
import {importProvidersFrom} from '@angular/core';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './app/Services/in-memory-data.service';

const routes: Routes = [
  {path: '', redirectTo: '/funds', pathMatch: 'full'},
  {path: 'funds', component: FundProjectList},
  {path: 'funds/:fundId',
  loadComponent: () => import('./app/Component/fundProject-list-item/fundProject-list-item').then(m => m.FundProjectListItem)}, //lazy loaded
  {path: 'modify-fund',
  loadComponent: () => import('./app/Component/modify-list-item.component/modify-list-item.component').then(m => m.default)},
  {path: '**',
  loadComponent: () =>
  import('./app/Component/page-not-found.component/page-not-found.component').then(m => m.PageNotFoundComponent)},
  {path: 'form', component: FormComponent},
  {path: '**', component: PageNotFoundComponent},

];
bootstrapApplication(App, {
  providers: [
    provideHttpClient(), //ensure that HTTP interceptors are properly configured
    provideRouter(routes),
  importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 1000}))  // import providers dynamically
  ],
}).then((err) => console.error(err));


