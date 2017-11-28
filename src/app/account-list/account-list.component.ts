import { Component, OnInit } from '@angular/core';
import { Account } from "../account";
import { AccountService } from "../account.service";

@Component({
  selector: 'app-account-list',
  templateUrl: './account-list.component.html',
  styleUrls: ['./account-list.component.css'],
  providers: [AccountService]
})
export class AccountListComponent implements OnInit {

  accounts: Account[] = [];

  constructor(private accountService: AccountService) {
    this.accounts = this.accountService.getAccounts();
  }


  ngOnInit() {
  }

}
