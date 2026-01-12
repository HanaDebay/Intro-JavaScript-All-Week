const creditSale = {
  saleId: 101,
  customer: "Hana",
  amount: 25000,
  paymentType: "credit",
  dueDate: "2026-02-15"
};

const creditSaleJSON = JSON.stringify(creditSale);
console.log("Stringified credit sale:", creditSaleJSON);

const dealers = ["Yahaya", "Marcel", "Uwase"];
const dealersString = JSON.stringify(dealers);

const dealersArray = JSON.parse(dealersString)
console.log(dealersArray)