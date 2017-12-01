import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Transaction } from "../transaction";
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent implements OnChanges {

  @Input() transaction: Transaction;
  model: Transaction = new Transaction();
  //transactionService:  TransactionService;
  @Output() onSubmit = new EventEmitter<Transaction>();

  constructor(//){};
    private transactionService: TransactionService) { }

  ngOnChanges() {
    this.model = Object.assign({}, this.transaction);
  }

  submit(form) {
    if (!form.valid) {
      console.log("baj van");
      return;
    }


    this.onSubmit.emit(this.model);
    for (var i = 0; i < this.transactionService.getTransactions().length; i++) {
      console.log(this.transactionService.getTransactions()[i]);
    }
  }

  add() {
    this.transactionService.addTransaction(this.model);
  }


}
