/** 
 *Type Error : operations on incmpatible type 
 */
// const num = 10;
// num.toUpperCase(); //TypeError: num.toUpperCase is not a function

/**
 * Range Error: number outside allowed range
 * 
 * */

/**
 * Control Flow
 * normally code runs top to bottom
 */

try {
    const userName = "Hana"
    console.log(userName.toUpperCase());
} catch (error) {
    console.log(error)
}

function canSeeTotalRevenu(userRole){

}

function learningThrow(){
    throw new Error("This is an error for throw");
}
try {
    learningThrow()
} catch (error) {
    console.log(error)
     console.log(error.message)
      console.log(error.stack)
}