function checkTonnage(tonne){
    if(tonne >= 1000){
        console.log("true")
    }else{
        console.log("False")
    }

}
checkTonnage(900)


//Arrow Function

const checkTonnage1 = inKgs => inKgs >= 1000 
console.log("Tonnage is: ", checkTonnage1(500)) 
