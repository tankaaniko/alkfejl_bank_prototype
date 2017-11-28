export class Transaction{
    id : number;
    type :  string;
    status : string;
    sourceAccountNumber : string  = "";
    targetAccountNumber : string = "";
    targetClientName :string = "";
    date : Date;
    amount : number ;

}

export enum Type{
    IN,
    OUT,
    TRANSFER
}

export enum Status{
    ACTIVE,
    EXECUTED
}