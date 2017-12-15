import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Client } from "./client";
import { ClientService } from "./client.service";
import { tap } from "rxjs/operators";

const httpOptions = {
  headers: new HttpHeaders(
    {'Content-Type': 'application/json'})
}


@Injectable()
export class AuthService {

  isLoggedIn: boolean = false;
  //loggedInClient : Client;
  client: Client;

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
        this.isLoggedIn = true;
        this.client = client;
      })
    )
    .toPromise();
  }

}
