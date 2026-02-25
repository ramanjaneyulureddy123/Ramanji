// // scope --it means whera a variable or function can be accessed
let name="mike"
function say(){
    console.log(name)
}
say()
// --name is accessible inside the function
// types of scope-- function scope, block scope
// function scope-- is a variable declare inside the function and cannot access the outside
function myname(){
    let locarvar="local"
    console.log(locarvar)
}
myname()
// --
 const b=20
function test() {
    
//    var b=2
     console.log(b)
}
test()
// console.log(b)

// block scope-- variables are declares with let and const inside { } have block scope
// --using let
if (true){
    let x=33
    console.log(x)
}
// console.log(x)
// --  using const
 if (true){
    const y=44
    console.log(y)
}
// ---declare out of block it gets error
// console.log(y)

// recursive function -- is a function that calls iself until a condition met
function sum(n){
    if(n===0){
        return 0
    }
    return n + sum(n-1)

}
console.log(sum(5))


function factorial(n){
    if(n===0 || n===1){
        return n
    }
    return n*factorial(n-1)
}
console.log(factorial(5))

function random(n){
    if(n<=0){
        console.log('done')
        return
        
    }
    console.log(n)
    random(n-1)
}
random(5)



