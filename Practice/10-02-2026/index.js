// fisrt class function -- it treats like a variables i.e 
// 1.assigning to a variable
const greet=function(){
    console.log("hello sir")
}
greet()
// 2. function is passing as argument
function sayhello(){
    console.log("hai bike")
}
function callfunction(fn){
    fn()
}
callfunction(sayhello)
// 3.returned from the another function
function outer(){
    return function(){
        console.log("anji")
    }
}
const result=outer()
result()
// console.log(outer())

function multiplier(factor) {
  return function (number) {
    return number * factor;
  };
}

const double = multiplier(2);
console.log(double(7));
// this key 
// console.log(this)
function Hello() {
    console.log(this)

}
// Hello()
// --
// let arr=()=>{
//     console.log(this)

// }
// arr()
// this inside an object 
let obj={
    name:"anji",
    sal:22000,
    Hey(){
        console.log(this.name)
    }  
}
obj.Hey()

// this inside arrow  function
let object={
    name:"ajay",
    sal:22000,
    Hey:()=>{
        console.log(this.name)
    }  
}
object.Hey()
// --change the reference object
function Hello(a,b,c) {
    console.log(this)
    console.log(a,b,c)
}
Hello.call(obj,10,20,30)
Hello.apply(obj,[10,20,30])
Hello.bind(obj,10,20,30)()

let arr=(a,b)=>{
    console.log(this)
      console.log(a,b)
}
arr.call(object,50,40)
arr.apply(obj,[10,20])
arr.bind(obj,10,20)()


// higher order function --takes a another function as an arguments and return a function as a result and does both

function mutliply(x){
   return function(y){
    return x*y
   }
}
const m=mutliply(2)
console.log(m(5))

// --
function greeet(name){
    return "HAi" +name
}
function  processUser(surename){
    console.log(surename("Ramanji"))
}
processUser(greeet)
// ---
function hof(func){
    func()   
    }
function van(){
    console.log("hi boss")
}
hof(van)
// ---
function create(num){
    return function(value){
        return value+num 
    }
}
const addfive=create(3)
console.log(addfive(4))