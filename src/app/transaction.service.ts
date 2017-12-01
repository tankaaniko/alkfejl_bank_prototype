import { Injectable } from '@angular/core';
import { Transaction, Type, Status } from "./transaction";

@Injectable()
export class TransactionService {

  transactions: Transaction[] = [
    {
      id: 1,
      type: Type[Type.IN],
      status: Status[Status.ACTIVE],
      sourceAccountNumber: "-",
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
      targetAccountNumber: "-",
      targetClientName: "-",
      date: new Date(),
      amount: 200
    }
  ];



  constructor() {
    for (var i = 0; i < this.getTransactions().length; i++) {
      console.log(this.getTransactions()[i]);
    }
   }

  getTransactions(): Transaction[] {
    
    return this.transactions;

  }

  addTransaction(transaction: Transaction) {
    var t: Type;

    if (transaction.sourceAccountNumber === "") {
      t = Type.IN
    } else if (transaction.targetAccountNumber === "") {
      t = Type.OUT
    } else {
      t = Type.TRANSFER
    }


    const trans = Object.assign(transaction, {
      id: this.transactions.length + 1,
      status: Status.ACTIVE,
      type: t,
      date: new Date()
    });
    this.transactions.push(trans);
  }
}
