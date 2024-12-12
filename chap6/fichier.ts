let age: number = 30;
let firstname: string = "Alice";
let isActive: boolean = true;

type Client = {
    id: number;
    firstname: string;
    email: string;
}

let client1: Client = {
    id: 101,
    firstname: firstname,
    email: 'alice@example.com'
}

console.log('client1', client1);
