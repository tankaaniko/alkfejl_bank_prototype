import { Injectable } from '@angular/core';
import { Account } from "./account";
import { Transaction , Type, Status} from './transaction';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders(
    { 'Content-Type': 'application/json' })
}

@Injectable()
export class AccountService {


  accounts: Account[];
  /*
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
*/
  

  constructor(    
    private http: HttpClient
  ) { }

  getAccounts(): Observable<Account[]> {
    /*
    for(let i =0; i< this.accounts.length;i++){
      console.log("Számla" +  this.accounts[i].accountNumber);
    
    }
    return this.accounts;*/
    return this.http.get<Account[]>('api/account/list')
    
  }

  getMyAccounts(): Observable<Account[]>{
    return this.http.get<Account[]>('api/account/listmy')
  }
/*
  getAccountByAccountNumber(sourceNumber:String){
    console.log("Account serviceben " + sourceNumber);

    for(let i =0; i< this.getAccounts().length;i++){
      console.log("Számla - " +  this.getAccounts()[i].accountNumber);
    
    }

    for(let i =0; i< this.getAccounts().length;i++){
      if(this.getAccounts()[i].accountNumber === sourceNumber){        
        return i;
      }
    }


  }
  
  transfer(transaction: Transaction){
    
    if(transaction.type === "IN"){
      let i = this.getAccountByAccountNumber(transaction.targetAccountNumber);      
      this.getAccounts()[i].balance += transaction.amount;

    }else if(transaction.type === "OUT"){
      let i = this.getAccountByAccountNumber(transaction.sourceAccountNumber);            
      this.getAccounts()[i].balance -= transaction.amount;
      
    }else{
      let i = this.getAccountByAccountNumber(transaction.sourceAccountNumber);            
      let j = this.getAccountByAccountNumber(transaction.targetAccountNumber);            
      
      console.log(i);
      console.log(j);

      this.getAccounts()[i].balance -= transaction.amount;
      this.getAccounts()[j].balance += transaction.amount;     
      
    }
  }
*/
}
