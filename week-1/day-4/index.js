//Conditions

let isLooggedIn = true;

if (!isLooggedIn) {
  console.log("You are not logged in, please login");
} else {
  console.log("You are logged in");
}

let userRole = "Admin";
if (userRole == "Admin") {
  //show the UI or the website for admins
  console.log("you are an admin");
} else {
  //show the UI or the website for other users
  console.log("you are not an admin");
}

let roles = {
  ueserRole1: "Admin",
  ueserRole2: "Sales Agent",
  ueserRole3: "Accountant",
};
userRole = "Admin";
if (userRole == "Admin") {
  //show the UI or the website for admins
  console.log("you are an admin");
} else if (userRole == "Sales Agent") {
  //show the UI or the website for Sales Agent
  console.log("you are Sales Agent");
} else {
  //show the UI or the website for accountants
  console.log("you are an Accountant");
}

console.log("__________________________________________");

let roles2 = "Admin" | "Sales Agent" | "Accountant";
let priviledges = "read" || "write" || "delete" || "update";

let adminPriviledges = "read";

if (roles2 === "Admin") {
  if (adminPriviledges === "read") {
    console.log("This admin can read all information");
  } else if (adminPriviledges === "write") {
    console.log("This admin can write new information");
  } else {
    console.log("this admin has no priviladges");
  }
}

//switch (advanced condition)
let message;
let userRoles = "Admin" | "Sales Agent" | "Accountant";
userRoles = "Admin"
switch (userRoles) {
  case "Admin":
    message = "This user is an admin";
    break;
    case "Sales Agent": 
    message = "This user is a Sales Agent";
    break;
    case "Accountant": 
    message = "This user is an Accountant";
    break;
}
console.log(message)

/**
 * Ternary operator
 * (logical Opertions) ? value for the truth outcome : value for the falsy outcome
 * 
 */

let userNationality = "Ugandan";
let currency = userNationality === "Ugandan" ? "UGX" : "USD";
console.log(currency)