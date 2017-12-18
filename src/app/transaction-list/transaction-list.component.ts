import { Component, OnInit } from '@angular/core';
import {Transaction, Status} from "../transaction";
import {TransactionService} from "../transaction.service";
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrls: ['./transaction-list.component.css'],
  providers : [TransactionService]
})
export class TransactionListComponent implements OnInit {

  transactions : Transaction[] ;
  filteredTransactions : Transaction[] ;

  constructor(private transactionService:TransactionService) { 
   
  }

  ngOnInit() {
    this.transactionService.getTransactions().subscribe(
      transactions => {setTimeout(() => {
        this.transactions = transactions;
      }, 1000);
     }
    )
  }

  execute(transaction: Transaction){
    transaction.status = "EXECUTED";
  }



}
