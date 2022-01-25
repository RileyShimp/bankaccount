Describe: Object.prototype.deposit();

Test: "It should add deposit amount to initial balance".
Code: let account = new BankAccount("Bob",500);
account.deposit(100);
Expected Output: ("Bob", 600);

Describe: Object.prototype.withdrawal();

Test: "It should subtract withdrawal amount from initial balance".
Code: let account = new BankAccount("Bob",500);
account.withdrawal(100);
Expected Output: ("Bob", 400);

