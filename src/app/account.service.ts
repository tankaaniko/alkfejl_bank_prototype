import { Injectable } from '@angular/core';
import { Account } from "./account";

@Injectable()
export class AccountService {

  accounts: Account[] = [
    {
      id: 1,
      accountNumber: "A1",
      creationDate: new Date(),
      balance: 1000,
      blocked: false
    },
    {
      id: 2,
      accountNumber: "A2",
      creationDate: new Date(),
      balance: 2000,
      blocked: false
    },
    {
      id: 3,
      accountNumber: "A3",
      creationDate: new Date(),
      balance: 3000,
      blocked: true
    }
  ];

  constructor() { }

  getAccounts() {
    return this.accounts;
  }
}
