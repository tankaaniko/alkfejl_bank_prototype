import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Transaction } from "../transaction";
import { TransactionService } from '../transaction.service';
import { AccountService } from '../account.service';


@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent implements OnChanges {

  @Input() transaction: Transaction;
  //model: Transaction = new Transaction();
  //transactionService:  TransactionService;
  //@Output() onSubmit = new EventEmitter<Transaction>();

  constructor(//){};
    private transactionService: TransactionService,
    private accountService: AccountService) {
    this.transaction = new Transaction();

  }

  ngOnChanges() {
    //this.model = Object.assign({}, this.transaction);
  }

  submit(form) {
    if (!form.valid) {
      console.log("baj van");
      return;
    }


    /*this.onSubmit.emit(this.model);
    for (var i = 0; i < this.transactionService.getTransactions().length; i++) {
      console.log(this.transactionService.getTransactions()[i]);
    }*/
  }
/*
  add() {
    for (let i = 0; i < this.accountService.getAccounts.length ; i++) {
      console.log(this.accountService.getAccounts()[i].accountNumber + "  -  " + this.accountService.getAccounts()[i].balance);

    }
    this.transactionService.addTransaction(this.transaction);

    if (this.transaction.sourceAccountNumber === "") {
      this.transaction.type = "IN";
      this.accountService.transfer(this.transaction);
    } else if (this.transaction.targetAccountNumber === "") {
      this.transaction.type = "OUT";
      this.accountService.transfer(this.transaction);
    } else {
      this.accountService.transfer(this.transaction);
    }

    console.log(this.transaction);
  }
*/

}
