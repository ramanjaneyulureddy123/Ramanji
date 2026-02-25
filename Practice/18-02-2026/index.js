// click 
let button=document.getElementById("btn")
console.log(button)

button.addEventListener("click",function(){
    alert(" button clicked")
})
// onclick 
button.onclick=function(){
    alert("welcome")
}
// mouseover
let box=document.getElementById("box")
console.log(box)

box.addEventListener("mouseover",function(){
    //  alert("double button clicked")
    box.style.backgroundColor="yellow"
})
// mouseout 
box.addEventListener("mouseout",function(){
    //  alert("double button clicked")
    box.style.backgroundColor="green"
})


// DOM travrsing
let b1=document.getElementById("name")
console.log(b1)
console.log(b1.parentElement)
let c=b1.parentElement
console.log(c.children)
console.log(c.firstElementChild)
console.log(c.lastElementChild)
console.log(sal.nextElementSibling)
console.log(sal.previousElementSibling)
// sychronou
console.log("1")
console.log("1")
console.log("1")

// assynchronous
// setTimeout 
console.log("start")
setTimeout(()=>{
    console.log("middle")
},2000)  
console.log("last")

// setInterval 
 let a=setInterval(()=>{
    console.log("middle")
},2000)

// clearinterval 
setTimeout(()=>{
clearInterval(a)
},6000)

// clearTimeout 
 let timer=setTimeout(()=>{
    console.log("ram")
},2000)
clearTimeout(timer)

