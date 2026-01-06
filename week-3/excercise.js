const creditSale = {
  nameOfTheBuyer: "Daniel",
  amountDue: 450000,
  dueDate: "2026-01-12",
  paymentStatus: "Pending"
};

const { nameOfTheBuyer, amountDue } = creditSale;

console.log(nameOfTheBuyer); 
console.log(amountDue);      



const maganjoStock = ["Beans", "Maize", "Millet","Sorghum"];
const matuggaStock = ["Rice", "Peas","Milk","Sugar"];

const newStock = [...maganjoStock , ...matuggaStock]
console.log(newStock);


const procurment = {
    produce: "Beans",
    tons: 500
}

const newProcurment = {
    ...procurment, amount: 5000, date: new Date("2025-01-06")
}
console.log(procurment)
console.log(newProcurment)


