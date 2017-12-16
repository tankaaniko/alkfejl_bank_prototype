import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Client } from "./client";
import { Employee } from "./employee";
import { ClientService } from "./client.service";
import { tap } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders(
    {'Content-Type': 'application/json'})
}


@Injectable()
export class AuthService {

  isLoggedIn: boolean = false;
  clientIsLoggedIn: boolean = false;
  employeeIsLoggedIn: boolean = false;
  
  //loggedInClient : Client;
  client: Client;
  employee: Employee;

  constructor(
    private http: HttpClient
  ) { }

  isLogged(){
    return this.isLoggedIn;
  }

  login(client: Client) {
    return this.http.post<Client>(
       //'http://localhost:4200/api/client/login',
      'api/client/login',
      client,
      httpOptions
    ).pipe(
      tap((client: Client) => {
        this.clientIsLoggedIn = true; // kliens menüjéhez kell, ugyan ilyen kellene az employeeIsLoggedIn-hez is!
        this.isLoggedIn = true;
        this.client = client;
      })
    )
    .toPromise();
  }

  
  logout() {
    // https://stackoverflow.com/a/46816238
    return this.http.post('api/client/logout', {}, httpOptions).pipe(
      tap(res => {
        console.log('service logout', res);
        this.isLoggedIn = false;
        this.clientIsLoggedIn = false;
        this.employeeIsLoggedIn = false;
        this.client = new Client();
      })
    ).toPromise();
  }

}
