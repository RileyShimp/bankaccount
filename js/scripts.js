function BankAccount(name, balance) {
  this.name = name;
  this.balance = balance;
};

BankAccount.prototype.deposit = function(deposit) {
  this.balance += deposit;
  return this.balance;
  console.log(balance);
}

BankAccount.prototype.withdrawal = function(withdrawal) {
  this.balance -= withdrawal;
  return this.balance;
  console.log(balance);
}

let account = new BankAccount("Bob",500);

account.withdrawal(100);