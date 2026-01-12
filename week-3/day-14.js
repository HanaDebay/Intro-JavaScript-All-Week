//OOP
//ALLOWS US TO STRUCTURE CODE AROUND DATA(OBJECTS) RATHER THATN JUST FUNCTIONS
//Class is a template which help us to define the properties and behavior of an object
//Object is an instance of a class

class Car {
  color = "Green";
  engineSize = "2000cc";
  topSpeed = 250;
}

class Sale {
  constructor(amountDue, purchaseDate, isCreaditSale) {
    this.id = Math.floor(Math.random() * 1000);
    this.amountDue = amountDue;
    this.purchaseDate = purchaseDate;
    this.isCreaditSale = isCreaditSale;
  }
}

let sale = new Sale(); //creating an object instance of a class
let sale2 = new Sale(2000, "2026-01-12", true);
console.log(sale);
console.log("Sales:", sale2);

class ProcurmentRecord {
  constructor(name, tonnage, totalCost) {
    this.name = name;
    this.tonnage = tonnage;
    this.totalCost = totalCost;
  }

  calculateUnitCost() {
    if (this.tonnage === 0) {
      throw new Error("Please provide tonnage above 0");
    }
    return this.totalCost / this.tonnage;
  }

  printDetail() {
    return `
        Produce Name: ${this.name}
        Tonnage: ${this.tonnage}
        Total Cost: ${this.totalCost}`;
  }
}
let produce1 = new ProcurmentRecord("Maize", 1500, 100000);
console.log(produce1);
console.log(produce1.name, produce1.tonnage, produce1.totalCost);
console.log(`Total Cost: ${produce1.calculateUnitCost()}`);
console.log(produce1.printDetail());

//Bank Account
class BankAccount {
  ownerName;
  balance;
  constructor(ownerName, balance) {
    this.ownerName = ownerName;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      console.log( amount + " Deposited Scuccefuly");
    } else {
      console.log("Please provide valid amount");
    }
  }

  withdraw(amount) {
    if (amount > this.balance || amount < 0) {
      console.log("insufficient balance");
    }else{
        this.balance -= amount
        console.log("Successfuly withdrawed")
    }
  }
  checkBalance(){
    console.log(`Balance: ${this.balance}`)
  
}
}
let account = new BankAccount("Hana", 3000);
account.deposit(3000);
account.withdraw(300)
account.checkBalance()

//Factorial

function factorial(n){
  if(n === 0) return 1;
  return n * factorial(n - 1)
}

console.log(factorial(5))