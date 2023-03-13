'use strict'
console.log(x)
console.log(func)

var x=10
function func(){
    console.log("inside function")
}

console.log(varfunc)

var varfunc=()=>{
    console.log("inside var func")
}


number=10
console.log(number)
var number


//-------------cannot access
// console.log(xyz)
// function checkFunc(){
//     var xyz
// }



if(true){
    var xyz=10
}

console.log(xyz)
// //--------------cannot access
// console.log(letnum)

// let letnum=10


// //-------------cannot access
// console.log(constNum)
// const constNum=20



// //------------const fun
// console.log(constfun)

// const constfun=()=>{
//     console.log('inside const nu function')
// }