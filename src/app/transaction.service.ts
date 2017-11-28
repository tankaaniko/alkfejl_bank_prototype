import { Injectable } from '@angular/core';
import { Transaction, Type, Status } from "./transaction";

@Injectable()
export class TransactionService {

  transactions: Transaction[] = [
    {
      id: 1,
      type: Type[Type.IN],
      status: Status[Status.ACTIVE],
      sourceAccountNumber: "",
      targetAccountNumber: "A1",
      targetClientName: "Valaki",
      date: new Date(),
      amount: 200
    },
    {
      id: 2,
      type: Type[Type.TRANSFER],
      status: Status[Status.ACTIVE],
      sourceAccountNumber: "A1",
      targetAccountNumber: "A2",
      targetClientName: "Valaki2",
      date: new Date(),
      amount: 300
    },
    {
      id: 3,
      type: Type[Type.OUT],
      status: Status[Status.ACTIVE],
      sourceAccountNumber: "A3",
      targetAccountNumber: "",
      targetClientName: "Valaki3",
      date: new Date(),
      amount: 200
    }
  ];



  constructor() { }

  getTransactions(){
    return this.transactions;
  }
}
