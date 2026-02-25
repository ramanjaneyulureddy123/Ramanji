// function -- function is a block of code to perform a specific task and return a value
// types of function -- function declaration and function expression
// function declaration -- definind a function keyword with specific name & allowing it to be reuse a block of code
// --
function great(){
    console.log("hello")
}
great()
// ---
function greats(name){
    console.log("hello " + name)
}
greats('anji')
// default parameter--it is a normal parameter but assign the value inside the function.if no value is passed he function automatically uses the dafault value
function car(a=19){
    console.log("sum is "+ a)
   
}
car()
// return statemets--is used to send a result from a function
function add(a,b){
    return a+b
}
console.log(add(2,3))
// --
function withdraw(balance,amount){
    if(amount>balance){
        return "insufficient balance"
    }return balance - amount
}
console.log(withdraw(1000,900))
// --arugemet objects and rest parameters
function define(a=1,b,c,d,...f){
    console.log(a,b,c,d)
    console.log(arguments)
    console.log(f)
}
define(10,2,3,4,5,6,7,8,9)
// function expressions -- is a functon that is assigned to a variable and can be used through the variable
// named function , anonymous function, arrow function
// named function--it has a own name when declared
function name(){
    console.log("hello")
}
name()
// --
function salary(basicpay){
    return basicpay+500
}
console.log(salary(20000))
// anonyamous function -- dont have a name & used to stored in a  variable 
let edds= function(a,b ){
    return a-b 
}
console.log(edds(10,5))
// arrow function -- is a shorter an simpler way to write a function in js introduced in es6
const sub=(a,b)=>a-b
console.log(sub(4,3))
// --
let square=x=>x*x
console.log(square(3))

