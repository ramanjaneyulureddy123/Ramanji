// conditional statements-- it is used to make decisions in a program based on given conditions
// types - if ,else, else if,switch
// if --it is used to execute a block of code only when a given condition is true
let age=20
if (age >=18){
    console.log("you are eligible for this job")
}
// --
let x=45
if(x%20===0){
    console.log("even")
}
if(x%20!==0){
    console.log("odd")
}
// --
let a=5
if(a>0){
    console.log("positive number")
}
// if else -- it executes one block of code if the condition is true another block if it false
let ages=16
if (ages >=18){
    console.log("you are eligible for this job")
}else{
    console.log(" not eligible")
}
// --
let password="223"
if(password==="223"){
    console.log("login success")
}else{
    console.log("wrong password")
}
// else if-- used to check multiple conditions in sequence
let marks=91
if(marks>=90){
    console.log("grade A")
}else if (marks>=60){
    console.log("grade B")
}else {
    console.log("fail")
}
// ---
let signal="red"
if (signal==="red"){
    console.log("stop")
}else if (signal==="yellow"){
    console.log("get ready")
}else if (signal==="green"){
    console.log("go")
}else{
    console.log("invalid signal")
}
// --
let time =7
if(time>=12){
    console.log("afternoon")
}else if (time<12){
    console.log("good morning")
}else {
    console.log("evening")
}
// switch -- it executes the matching case of block based on its value
let day=2
switch(day){
    case 1: console.log("mon")
break;
    case 2:console.log("tues")
    break;
    case 3:console.log("wed")
    break;
    default: console.log("sun")
}
// --
let z=2 ,y=3
let operator="*"
switch(operator){

   case "+":console.log(z+y)
   break;
   case "-":console.log(z-y)
   break;
   case "*":console.log(z*y )
}
// truthy value-- are values that are evaluated to be true.when used in boolean conext (if, while,logical)
// some values are there--
// non-zero values (1, -1 ,3.67,3,4,)
if(3.87){console.log("truthy value")}
// non-empty values ("hi"," ","0")
if("0"){console.log("truthy value")}
// function({}) array{} big int,object{}
if(""){
    console.log("truthy value")
}else {
    console.log("falsy value")
}
// fasly values -- are values which are treated as false
// false, 0 &-0,""(empty string),null,undefined,nan,
if (false){
    console.log("falsy value")
}
// -- null it shows no output
let h
if (h){
    console.log("run")
}
// naN 
if (NaN){
    console.log("falsy value")
}

if(!!1){console.log("true")}