import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AppComponent } from '../app.component';
import { MainPageComponent } from '../main-page/main-page.component';
import { AccountListComponent } from "../account-list/account-list.component";
import { TransactionListComponent } from "../transaction-list/transaction-list.component";
import { TransactionFormComponent } from '../transaction-form/transaction-form.component';
import { LoginComponent } from '../login/login.component';
import { LoginEmployeeComponent } from "../login-employee/login-employee.component";
import { LoginClientComponent } from "../login-client/login-client.component";

const routes: Routes = [
  {
    path: '',
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
  },
  {
    path: 'client/login',
    component: LoginClientComponent
  },
  {
    path: 'employee/login',
    component: LoginEmployeeComponent
  },
  {
    path: 'logout',
    component: MainPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }