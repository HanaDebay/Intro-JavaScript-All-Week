//Inheritance
//Inheritance allows a new class (Child or Subclass) to reuse and extend functionality from an existing class (Parent or Superclass).

class KglSale {
  constructor(produceName, tonnage, totalCost, saleData, currency) {
    this.produceName = produceName;
    this.tonnage = tonnage;
    this.totalCost = totalCost;
    this.saleData = saleData;
    this.currency = currency;
  }
  getDetails() {
    return `The sale of ${this.produceName} was made on ${this.saleData} and the total Cost was ${this.totalCost}`;
  }
}
class KglCreditSales extends KglSale {
  constructor(
    produceName,
    tonnage,
    totalCost,
    saleData,
    currency,
    isCreditSale,
    dueDate
  ) {
    super(produceName, tonnage, totalCost, saleData, currency);
    this.isCreditSale = isCreditSale;
    this.dueDate = dueDate;
  }
  calculateDueDateInDays() {
    let currentDate = new Date();
    let currentTimeStmp = currentDate.getDate();
    let dueDateTiemStamp = this.dueDate.getTime()
    if(currentTimeStmp > dueDateTiemStamp){
        return 0
    }
    let timeDifference = dueDateTiemStamp - currentTimeStmp

    let daysDue = timeDifference/1000/60/60/24
    return daysDue
  }
}

let sale = new KglSale("Maize", 5000, 200000, new Date("2026-02-12"), "YES");
let creditSale = new KglCreditSales(
  "Wheat",
  500,
  1500000,
  new Date("2026-01-13"),
  "YES"
);
let creditSale2 = new KglCreditSales(
  "Maize",
  500,
  1500000,
  new Date("2026-01-13"),
  "YES", 
  true,
  new Date("2026-02-12"),


);
console.log(sale.getDetails());
console.log(creditSale2.getDetails())
console.log(creditSale2.calculateDueDateInDays())