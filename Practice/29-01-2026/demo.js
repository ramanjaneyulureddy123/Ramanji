// / primitive data types -- it stores single value in single memory location
// 1. number-- it is used to store values both integer and decimals
let b=33
console.log(b) 

let bb=6.77
console.log(bb)
console.log(typeof(bb))
// 2.string ---uesd to store text("",'',``)
var q="ram"
console.log(q)

var e='red'
console.log(e)

var r=`white`
console.log(r)

let rr="30"
console.log(rr)
console.log(typeof(rr))

// boolean --- it is used to store true or false values
let use=true 
console.log((use))

let us=false
console.log(us)
console.log(typeof(us))

// undefined ---A declared that is variable bu assigned a value
let j
console.log(j)
console.log(typeof(j))

// null -- no value
let data = null
console.log(data)
console.log(typeof(data))

// bigint -- used to store very large numbers and use end with 'n'
let bignum=1234567899934n
console.log(bignum)
console.log(typeof(bignum))


// symbol --- used to store unique values
let f=Symbol("hai")
let h=Symbol("hai")
console.log(f===h)

let  x= Symbol.for("hi")
let y= Symbol.for("hi")
console.log(x===y)
console.log(Symbol.keyFor(x))
 

