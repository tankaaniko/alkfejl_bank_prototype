import { Component, OnInit } from '@angular/core';
import {Transaction} from "../transaction";
import {TransactionService} from "../transaction.service";


@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css'],
  providers : [TransactionService]
})
export class TransactionListComponent implements OnInit {

  transactions : Transaction[] = [];

  constructor(private transactionService:TransactionService) { 
   
    this.transactions = this.transactionService.getTransactions();
    for (var i = 0; i < this.transactionService.getTransactions().length; i++) {
      console.log(this.transactionService.getTransactions()[i]);
    }
  }

  ngOnInit() {
   // this.transactionService.getTransactions().subscribe(
   //   transactions => {this.transactions = transactions}
   // )
  }

}
