let sales = [
  { salesAgentName: "Hana", product: "Maize", date: new Date("2025-12-12") },
  { salesAgentName: "Daniel", product: "Rice", date: new Date("2025-12-01") },
  { salesAgentName: "Hana", product: "Beans", date: new Date("2025-10-10") },
  { salesAgentName: "Zahara", product: "Maize", date: new Date("2025-09-25") },
];

let salesAgentNames = sales.map((sale) => sale.salesAgentName);
let uniqueSalesAgentNames = new Set(salesAgentNames);

console.log(salesAgentNames);
console.log(uniqueSalesAgentNames);

let names = ["Hana", "Debay", "Hana", "Abel"];
let setNames = new Set(names);
console.log(setNames);

console.log(setNames.has("Hana"));
setNames.add("Teshome");
console.log(setNames);

const procurment = [
  { dealerName: "Hana", product: "Maize", qtyInKgs: 50 },
  { dealerName: "Sara", product: "Beans", qtyInKgs: 40 },
  { dealerName: "Abel", product: "Rice", qtyInKgs: 30 },
  { dealerName: "Hana", product: "Maize", qtyInKgs: 10 },
];

let dealersName = procurment.map((name) => name.dealerName);
let uniqueDealearName = new Set(dealersName);
console.log(uniqueDealearName);

let product = procurment.map((product) => product.product);
let uniqueProduct = new Set(product);
console.log(uniqueProduct);

const kglPrice = new Map([
  ["Maize", 400],
  ["beans", 300],
  ["Milk", 200],
  ["Rice", 100],
  ["Sugar", 500],
]);

let price = new Map(kglPrice);
price.set("Matooke", 600);
console.log(price);

//Task: Retrieve the price for a specific product.
console.log("---------------------")
console.log(price.get("Sugar"))

/**
| Use Case                   | Better Choice |
| -------------------------- | ------------- |
| Store prices per product   | `Map`         |
| Track unique product names | `Set`         |
| Check if product exists    | `Set`         |
| Look up value by key       | `Map`         |

 */

// Task: Check authorization using a Set.

const user = new Set(["Hana", "Daniel", "Odongo", "Kitisa"])

function checkAccess(userName, role){
    if(!user.has(userName)){
        console.log(`${userName} has no access `)

    }else{
        console.log(`${userName} who is a ${role} has full access`)
    }
}

console.log("___________________________")
console.log(checkAccess("Hana", "Software Developer"))



// Task: Check authorization using a Map.
const authorizedUsers = new Map([
    ["Hana", {role: "Software Enginer", access: "Granted"}],
    ["Zara", {role: "UI/UX", access: "Denied"}],
    ["Daniel", {role: "Taster", access: "Granted"}],
]);
authorizedUsers.access = "Denied"
if(authorizedUsers.access === "Denied"){
    console.log(`${authorizedUsers.userName} which is an/a ${authorizedUsers.role} don't have access to this account`)
}else{
    console.log(`${authorizedUsers.userName} which is a ${authorizedUsers.role} has a full access to this account `)
}

function authorize(userName){
    const user = authorizedUsers.get(userName)
    if(!user || user.access === "Denied"){
        console.log(`${userName} access denied`)
    }else{
        console.log(`${userName} access granted`)
    }
}


authorize("Hana")