import { Component, OnInit, Input , OnChanges, Output, EventEmitter} from '@angular/core';
import {Transaction} from "../transaction";

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.css']
})
export class TransactionFormComponent implements OnChanges {

  @Input() transaction : Transaction;
  model : Transaction = null;

  @Output() onSubmit = new EventEmitter<Transaction>();

  constructor() { }

  ngOnChanges() {
    this.model = Object.assign({},this.transaction);
  }

  submit(form){
    if(form.valid){
      return;
    }
    this.onSubmit.emit(this.model);
  }


}
