//calculate average tonnage

let dailyTonnage = [2000, 1000, 869, 678];

let total = 0;
for (let i = 0; i < dailyTonnage.length; i++) {
  total += dailyTonnage[i];
}

let average = total / dailyTonnage.length;
console.log("Average", average);

// Exercise 2: Credit Check
// 1. Create an array of credit status strings:
// ['paid', 'due', 'paid', 'due'].
// 2. Use a for...of loop to check each record.
// 3. Use continue to skip 'paid' records.
// 4. Only log the records that are 'due'

let creditStatus = ["paid", "due", "paid", "due"];

for (let creditstat of creditStatus) {
  if (creditstat === "paid") {
    continue;
  }
  console.log(creditstat);
}

for (let i = 0; i <= creditStatus.length; i++) {
  console.log(creditStatus[i]);
}

// Exercise 3: Manager Alert
// 1. Simulate an inventory check loop
// 2. If 'Beans' are found, reduce quantity(simulate variable).
// 3. If quantity hits 0, use break to exit immediately. //lengtof list =0
// 4. Print: "Manager: Beans are now out of stock."

let listOfProduce = ["Beans", "Maize", "G-nuts", "Soyabeans"];
let beansOfQty = 5;

for (let produce of listOfProduce) {
  if (produce.includes("Beans")) {
    beansOfQty--;
    console.log("Beans Qty: ", beansOfQty);
    if (beansOfQty === 0) {
      console.log("Manager: Beans are now out of stock");
      break;
    }
  }
}
