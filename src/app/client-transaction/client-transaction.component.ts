import { Component, OnInit } from '@angular/core';
import {Transaction, Status} from "../transaction";
import {TransactionService} from "../transaction.service";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-client-transaction',
  templateUrl: './client-transaction.component.html',
  styleUrls: ['./client-transaction.component.css']
})
export class ClientTransactionComponent implements OnInit {
  
  
    transactions : Transaction[] ;
    filteredTransactions : Transaction[] ;
  
    constructor(private transactionService:TransactionService) { 
     
    }
  
    ngOnInit() {
      this.transactionService.filterTransactionByAccountNumber("1111").subscribe(
        transactions => {setTimeout(() => {
          this.transactions = transactions;
        }, 1000);
       }
      )
    }


}
