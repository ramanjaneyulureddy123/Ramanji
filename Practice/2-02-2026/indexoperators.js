// weakset -- it is a special collection i js hat stores only ojects and hold them weakly references

let user={name:"anji",age:22}
let weakset=new WeakSet()
// add 
weakset.add(user)
// has 
console.log(weakset.has(user))
// delete 
weakset.delete(user)
console.log(weakset.has(user))
// user=null


// operators-- sre special symbols that are used  to perform operations on value or variable and return the value
// arithematic operators--it perform mathematical calculations
// +,-,*,/,%.++,--,**
var a=2
var b=3
// let sum=a+b
// console.log(sum)
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)
console.log(a**b)
console.log(a++)
console.log(a)
console.log(a--)
console.log(a)
// assignment operator--it is used to assign value to variables and update existing values
// =,+=,-+,*=,/=,%=
let c=10  
c +=5
console.log(c)
c-=3
console.log(c)
c*=5
console.log(c)
c/=5
console.log(c)
c%=5
console.log(c)
c**=5
console.log(c)
// comparision operator --it is used to compare two value and return a boolean value
// < > <= >= == === != !==
var a=8
var b=9
console.log(a<b)
console.log(a>=b)
console.log(a<=b)
console.log(a>=b)
// == is check the value and ignore the type 
console.log(5=="5") 
console.log(5==5)
// === it checks the value and type
console.log(5===5)
console.log(5==="5")
console.log(6==="5")
// != 
console.log(10!=5)
console.log(2!=2)
// !== 
// vaule same type diff/true
console.log(5!=="5") 
// value same type same / false
console.log(5!==5)

// logical operator-- used to combine conditions and return a boolean value (true or false)
// logical AND -- IF THE CONDITIONS are true then the result will be true
console.log((2<4)&&(8>4)) 
console.log((2>4)&&(8>4)) 

let age =20
if(age>=20 && age>=19 ){
    console.log("true")
} else {
    console.log("fail")
}
// logical OR-- if any one of the condiion is true then the result will be true
console.log((2>4)||(8>4)) 

let username="admin"
let password="1234"
if(username==="admin" || password==="234"){
    console.log("successful")
} else {
    console.log("failed")
}
// logical NOT -- REVERE THE RESULT
console.log(!(2>4))

let logintest=true

if(!logintest){
    console.log("please login")
} else {
    console.log("welcome")
}
// ternary operator -- used to check a condition and return a value // it is a short form of if else statement 
let salary=700
salary>500 ? console.log("apply") : console.log("not eligible")
let amount=100
console.log(amount>500 ?"apply":"not apply")

// Template literal--used to create a string and insert the variables or expressions inside strings
let name="reddy"
let lastname="ram"
console.log(`my name is ${lastname} ${name}`)

// string operators-- used to combine the strings
// concatenation (+)
 var fname="anji"
 var lname="chandru"
 let fullname = fname+" "+lname
 console.log(fullname)
//  concatenation assign (+=)
let text="hello"
text +=" anji"
console.log(text)
// bitwise operator-- it works on he binary valuse ( 0s and 1s)
// & | ^ ~ << >> >>> 
let y= 2
let x=3
// and   0010 0011--0010
console.log(2&3)
// or    0010 0011 --0011
console.log(2|3)
// expotential 0010 0011 --0001
console.log(2^3)
// not 
console.log(~2)
// left shift formula-- number * (2^n)
console.log(8<<2)
// right shift formula--number /(2^n)
console.log(10>>2)
// zero fill right side 
console.log(5>>>2)
let x1=Symbol("Ramanji")
let x2=Symbol(121)
console.log(x1==x2)