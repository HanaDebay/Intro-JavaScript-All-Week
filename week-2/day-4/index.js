// higher order funtions the moder approach
//First Class citizens
function greet() {
  return "Hello";
}

//HOF

function excute(action) {
  console.log(action());
}

excute(greet);

let produce = ["Beans", "Maize", "Rice", "Tomato"];

produce.forEach((product, index) => {
  console.log(`${product} is index number ${index}`);
});

let emails = [
  "hana@student.refactory.academy",
  "odongo@student.refactory.academy",
  "edna@student.refactory.academy",
  "kitsa@student.refactory.academy",
];

function sendEmail(emailAddress) {
  console.log(`Email was sucessfully sent to ${emailAddress}`);
}

emails.forEach((email) => {
  sendEmail(email);
});

//map function/mehtod

let capitalizedEmails = emails.map((email) => {
  return email.toLocaleUpperCase();
});

console.log(capitalizedEmails);

for (let i = 0; i < emails.length; i++) {
  let email = emails[i].toLocaleUpperCase();
  console.log(email);
}

let ages = [23, 23, 45, 32, 1, 56, 7, 4, 23, 65, 54, 89];
let filteredAges = ages.filter((ages) => ages <= 25);

console.log(filteredAges);

// let sales = [
//   { customerName: "simon", isCreditSale: true, amount: 10_000 },
//   { customerName: "Edina", isCreditSale: false, amount: 20_000 },
//   { customerName: "simon", isCreditSale: true, amount: 33_000 },
//   { customerName: "simon", isCreditSale: false, amount: 55_000 },
// ];

// let filteredSales = sales.filter(
//   (sale) => sale.amount > 15000 && sale.isCreditSale === true
// );
// console.log(filteredSales);

//reduce
let sumAges = ages.reduce((sum, age) => {
  return sum + age;
}, 0);

console.log(sumAges);

let price = [{ maize: 200 }, { beans: 400 }, { tomato: 100 }];
let total = price.reduce((subTotal, price) => {
  return subTotal + price;
}, 0);
console.log(total);

let sales = [
  { buyersName: "Kevin", amountPaid: 15_000 },
  { buyersName: "Hana", amountPaid: 30_000 },
  { buyersName: "Ahmed", amountPaid: 20_000 },
  { buyersName: "", amountPaid: 45_000 },
];

let totalRevenu = amountPaid.reduce((totalAmount , sale) => {
    return totalAmount + sale.amountPaid;
}, 0)

console.log("Total Revenue: ",totalRevenu)