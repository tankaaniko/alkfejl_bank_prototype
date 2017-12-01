import { Injectable } from '@angular/core';
import { Client } from "./client";
import {Account} from "./account";


@Injectable()
export class ClientService {

  clients: Client[] = [
    {
      accounts: [
        {
          id: 1,
          accountNumber: "A1",
          creationDate: new Date(),
          balance: 1000,
          blocked: false
        },
        {
          id: 2,
          accountNumber: "A11",
          creationDate: new Date(),
          balance: 2000,
          blocked: false
        }
      ],
      id: 1,
      name: "C1",
      username: "c1",
      password: "c1",
      pin: "0001"
    },
    {
      accounts: [
        {
          id: 3,
          accountNumber: "A2",
          creationDate: new Date(),
          balance: 1000,
          blocked: false
        }
      ],
      id: 2,
      name: "C2",
      username: "c2",
      password: "c2",
      pin: "0002"
    }
  ];

  constructor() { }

  getClients(): Client[] {
    return this.clients;
  }

  getClient(id): Client {
    return this.clients.find(client => client.id === id);
  }

  getMyAccounts(id): Account[]{
    const loggedInClient: Client = this.getClient(id);
    return loggedInClient.accounts;
  }

}
