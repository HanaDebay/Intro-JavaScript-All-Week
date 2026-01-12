class KglProcurment {
  constructor(nameOfProduce, tonageInKgs, dealerName) {
    this.nameOfProduce = nameOfProduce;
    this.tonageInKgs = tonageInKgs;
    this.dealerName = dealerName;
  }

  isValidTonnage() {
    if (this.tonageInKgs >= 1000) {
      return true;
    } else {
      return false;
    }
  }

  
}

let procurment1 = new KglProcurment("Maize", 900, "Hana");
console.log(procurment1.isValidTonnage())
