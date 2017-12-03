import { Transaction, Type, Status } from './transaction';

export const TRANSACTIONSMOCK: Transaction[] = [
    {
      id: 1,
      type: Type[Type.IN],
      status: Status[Status.ACTIVE],
      sourceAccountNumber: "-",
      targetAccountNumber: "A1",
      targetClientName: "Valaki",
      date: new Date(),
      amount: 200
    },
    {
      id: 2,
      type: Type[Type.TRANSFER],
      status: Status[Status.ACTIVE],
      sourceAccountNumber: "A1",
      targetAccountNumber: "A2",
      targetClientName: "Valaki2",
      date: new Date(),
      amount: 300
    },
    {
      id: 3,
      type: Type[Type.OUT],
      status: Status[Status.ACTIVE],
      sourceAccountNumber: "A3",
      targetAccountNumber: "-",
      targetClientName: "-",
      date: new Date(),
      amount: 200
    }
  ];