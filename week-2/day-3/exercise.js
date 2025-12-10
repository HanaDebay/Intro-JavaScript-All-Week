
let salesRecord = {
    "produceName" : 200,
    "tonnageInKgs": 50,
    "amountPaid": 3000,
    "buyersName": "John"
}

console.log(salesRecord);
console.log(Object.keys(salesRecord)); //returns elements as an array
console.log(Object.values(salesRecord));
console.log(Object.entries(salesRecord));

for(const sales in salesRecord){
    console.log(sales)
}

salesRecord.amountPaid = 1000
console.log()

salesRecord.isCreaditSale = true,
salesRecord.dueDate = new Date("2025-12-12")
console.log(salesRecord)


let salesSchema ={
    produceName: "string",
    tonnageInKgs: "number",
    amountPaid: "number",
    buyersName: "string",
    isCreaditSale: "boolean",
    dueDate: "Date"
}


for(let key of Object.keys(salesSchema)){
    if(typeof salesRecord[key] !== salesSchema[key]){
        console.log(`${key} has wrong type. Expected ${salesSchema[key]}.`)
    }else{
        console.log(`${key} has correct type with Expected ${salesSchema[key]} dat type.`)
    }
}