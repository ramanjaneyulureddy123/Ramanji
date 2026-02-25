// global scope ---variables are declared outside any function and can be accessed anywhere in the js program
let x=10
function show(){
    let x=34
    // console.log(x)
}
show()
console.log(x)
// --
let name = "John"; // Global variable

function sayHello() {
      console.log("Hello " + name);
}

sayHello(); // Output: "Hello John"

// lexical scope --- determine the variables and functions based on where they define in the source code 
function outer(){
    let x=10
    function inner(){
        console.log(x)
    }
    inner()
}
outer()
// --
let a=100
function first(){
       let b=200
       function second(){
        console.log(a+b)
       }
       second()
}
first()
// --recursive function
// let sum=0
let one = function rec(a){
    if(a==0){
        return 0
    }
    return a+rec(a-1)
}

console.log(one(10))
console.log(one(8))
//function currying -- a function with multiple parameters into a sequence of functions
// each taking a one arguments return another function until all arguments are recieved
function add(a){
    return function(b){
        return function(c){
        return a+b+c
    }
}
}
// const addtwo=add(5)
//  console.log(addtwo(4))
 console.log(add(2)(3)(1))

//  currying with arrow function
const abb= a=>b=>a+b
console.log(abb(2)(9))
// pure function -- is a function that always produces the same output for the same input
function sum(a, b) {
    return a + b;
}
console.log(sum (2, 3)); 
console.log(sum(2, 3));

// impure function-- is a function can produce a different output for the same input
let total=0
function addtototal(value){
    total+=value 
    return value 
}
console.log(addtototal(10))
console.log(total)
// --
const n=10
function deu(n){
    return n + x;
}
console.log(deu(2))
console.log(deu(7))
