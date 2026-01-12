// class SalesAgent{
//     constructor( name, branch, totalSales ){
//         this.id = Math.floor(Math.random() * 500)
//         this.name = name;
//         this.branch = branch;
//         this.totalSales = totalSales;
//         this.isActive = true;

//     }
//     getDetails(){
//         return `Id: ${this.id} Name: ${this.name} Branch: ${this.branch} Total Sale: ${this.totalSales}`
//     }

//     makeSale(amount){
//         this.totalSales += amount;
//     }


// }

// class Manager extends SalesAgent {
//   constructor(name, branch, totalSales) {
//     super(name, branch, totalSales);
//   }
// }
// let saleAgent = new SalesAgent("Hana", "Entebe", 5000,)
// let manager = new Manager("Daniel", "Kampala", 40000)

// console.log(saleAgent.getDetails())



class Item{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    getPrice(){
        return this.price;
    }
}

class PerishableItem extends Item{
    constructor(name, price, daysUntilExpiry){
        super(name,price);
        this.daysUntilExpiry = daysUntilExpiry;
    }
    getPrice(){
        if(typeof this.daysUntilExpiry === "number"){
            let discountPercentage = 1 / this.daysUntilExpiry;
            let discount = discountPercentage * this.price;
            return `Discount: ${this.price - discount}`;
        }

    }
}

let item1 = new Item("Rice", 40000)
let item = new PerishableItem("Milk",4000, 7);
console.log(item1.getPrice())
console.log(item.getPrice())