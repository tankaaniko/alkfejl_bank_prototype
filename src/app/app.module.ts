import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from "./routing/routing.module";


import {
  MatToolbarModule, MatButtonModule, MatMenuModule, MatIconModule,
  MatFormFieldModule, MatInputModule,
  MatButtonToggleModule
} from "@angular/material";


import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { AccountListComponent } from './account-list/account-list.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { TransactionDetailComponent } from './transaction-detail/transaction-detail.component';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    TransactionListComponent,
    AccountListComponent,
    AccountDetailComponent,
    TransactionDetailComponent,
    TransactionFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule, MatButtonModule,
    MatIconModule, MatMenuModule,
    MatButtonToggleModule,
    FormsModule,
    RoutingModule,
    MatFormFieldModule, MatInputModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }