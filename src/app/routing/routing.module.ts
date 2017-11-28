import { NgModule } from '@angular/core';
import { RouterModule, Routes }   from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from '../app.component';
import { MainPageComponent } from '../main-page/main-page.component';
import { AccountListComponent } from "../account-list/account-list.component";
import { TransactionListComponent } from "../transaction-list/transaction-list.component";
import { TransactionFormComponent } from '../transaction-form/transaction-form.component';

const routes: Routes = [
  {
    path: '',
    /*
    redirectTo: '/dashboard',
    pathMatch: 'full'
    */
    component: MainPageComponent
  },
  {
    path: 'dashboard',
    component: MainPageComponent
  },
  {
    path: 'transactions',
    component: TransactionListComponent
  },
   {
     path: 'accounts',
     component: AccountListComponent
   },
   {
     path: 'transactions/new',
     component: TransactionFormComponent
   }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }