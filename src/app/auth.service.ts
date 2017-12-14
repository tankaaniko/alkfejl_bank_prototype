import { Injectable } from '@angular/core';
import { Client } from "./client";
import { ClientService } from "./client.service";


@Injectable()
export class AuthService {

  isLoggedIn: boolean = false;
  loggedInClient : Client;

  constructor(
    private clientService: ClientService
  ) { }

  isLogged(){
    return this.isLoggedIn;
  }

  login(client: Client) {
   //http
    let allClient: Client[] = this.clientService.getClients();
    for (let i = 0; i < allClient.length; i++) {
      if (client.username === allClient[i].username &&
        client.password === allClient[i].password &&
        client.pin === allClient[i].pin){
          console.log("sikeres bejelentkezés.");
          this.isLoggedIn = true;
          this.loggedInClient = allClient[i];
          break;
        }
    }
  }

}
