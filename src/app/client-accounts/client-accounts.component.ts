import { Component, OnInit } from '@angular/core';
import { Account } from "../account";
import { AccountService } from "../account.service";


@Component({
  selector: 'app-client-accounts',
  templateUrl: './client-accounts.component.html',
  styleUrls: ['./client-accounts.component.css']
})
export class ClientAccountsComponent implements OnInit {

  accounts: Account[] = [];
  
    constructor(private accountService: AccountService) {
    }
  
    ngOnInit() {
      this.accountService.getMyAccounts().subscribe(
        accounts => {this.accounts = accounts}
      )
    }

}
