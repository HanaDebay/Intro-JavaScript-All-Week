// user Role Check
let userRole = ["Director", "Manager", "Sales Agent"];
// userRole = "Accountant";
let message;
if (userRole[0] === "Director") {
  message = "Viewing Totals Only";
} else if (userRole == "Manager") {
  message = "Can record Procurment & Sales";
} else if (userRole === "Sales Agent") {
  message = "Can record sales only";
} else {
  message = "Access Denied";
}
console.log(message);

// complex Validation

let buyerName = "Hana";
let amountDue = 2000
let produceName = "bag"
if(buyerName.length >= 2 && amountDue >= 5 && produceName != ""){
    console.log("condition met!")
}else{
    console.log("condition fail to met!")
}

//Produce Switch
let produceType = "beans"

switch(produceType){
    case "Beans": console.log("This is Beans");
    break;
    case "G-nuts": console.log("This is G-nut");
    break;
    default: console.log("Cow peas, Grain Maize Soyabeans")
    break;
}