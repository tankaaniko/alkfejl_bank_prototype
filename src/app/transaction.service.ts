import { Injectable } from '@angular/core';
import { Transaction, Type, Status } from "./transaction";
import { TRANSACTIONSMOCK } from "./mock-transactions";

@Injectable()
export class TransactionService {

  transactions: Transaction[] = TRANSACTIONSMOCK;
    
  constructor() {
    /*for (let i = 0; i < this.getTransactions().length; i++) {
      console.log(this.getTransactions()[i]);
    }*/
   }

  getTransactions(): Transaction[] {
    
    return this.transactions;

  }

  addTransaction(transaction: Transaction) {
    let t: Type;

    if (transaction.sourceAccountNumber === "") {
      t = Type.IN;
    } else if (transaction.targetAccountNumber === "") {
      t = Type.OUT;
    } else {
      t = Type.TRANSFER;
    }

    const trans = new Transaction();
    trans.id = this.transactions.length + 1;
    trans.type = Type[t];
    trans.status = Status[Status.ACTIVE];
    trans.sourceAccountNumber = transaction.sourceAccountNumber;
    trans.targetAccountNumber = transaction.targetAccountNumber;
    trans.targetClientName = transaction.targetClientName;
    trans.date = new Date();
    trans.amount = transaction.amount;
    this.transactions.push(trans);
  }
}
