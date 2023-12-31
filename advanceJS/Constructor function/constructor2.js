// BANK ACCOUNT MANAGEMENT
// Task: Implement a bank account management system using JavaScript objects and functions.
// Instructions:
// Create a constructor function called BankAccount that takes accountNumber, name, type, and balance as arguments.





// Inside the constructor, initialize the properties of the bank account object.
// Add the following methods to the BankAccount prototype:
// deposit(amount) - Deposits the specified amount into the account.
// withdraw(amount) - Withdraws the specified amount from the account if the balance is sufficient.
// checkBalance() - Prints the account's balance.
// isActive() - Checks and returns whether the account is active.
// Create multiple BankAccount objects representing different accounts.

// Perform a series of deposit, withdrawal, and balance check operations on these accounts.

// Test the isActive method to check if the accounts are active.

// Implement a function getTotalBalance that calculates and returns the total balance of all active accounts.

// Test the getTotalBalance function to display the total balance of all active accounts.

function BankAccount(accountNumber,name,type,balance,active){
    this.accountNumber = accountNumber;
    this.name = name;
    this.type = type;
    this.balance = balance;
    this.active = active;
}

BankAccount.prototype.deposit = function(amount) {
    if(amount>0){
           this.balance += amount;
           console.log(`Deposit of ${amount} successful. New Balance: ${this.balance}`);

    }else{
        console.log("Invalid deposit amount.");
    }
};

BankAccount.prototype.withdrawal = function(amount){
    if(amount>0 && amount<=this.balance){
        this.balance -= amount;
        console.log(`Withdrawal of ${amount} successful. New Balance: ${this.balance}`);
    }else{
        console.log("Invalid withdrawal amount or insufficient balance.");
    }
};

BankAccount.prototype.checkBalance = function(){
    console.log(`Account Balance: ${this.balance}`)
}

BankAccount.prototype.isActive = function(){
     return this.active;
};

function getTotalBalance(accounts){
       let totalBalance = 0;
       for(let account of accounts){
        if(account.isActive()){
            totalBalance += account.balance;

        }
       }
       console.log(totalBalance);
}

let account1 = new BankAccount(212344,"Rahul","Savings",400,true);
let account2 = new BankAccount(213344,"Shikhar","Savings",400,true);
let account3 = new BankAccount(212346,"Shubham","Current",500,true);
let account4 = new BankAccount(212347,"Rajesh","Savings",400,false);

let all_accounts = [account1,account2,account3,account4]

account1.deposit(100);
account1.checkBalance();
account1.withdrawal(100);

account2.deposit(100);
account2.checkBalance();
account2.withdrawal(100);

account3.deposit(100);
account3.checkBalance();
account3.withdrawal(100);


getTotalBalance(all_accounts);


