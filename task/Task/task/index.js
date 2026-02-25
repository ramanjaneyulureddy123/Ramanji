const message=document.getElementById("message")
const login=document.getElementById("login")
const logout=document.getElementById("logout")

check()
login.addEventListener("click",()=>{
    localStorage.setItem("token",12689)
    check()
})

logout.addEventListener("click",()=>{
    localStorage.removeItem("token")
    check()
})

function check(){
    const token=localStorage.getItem("token")
    if(token){
        message.innerText="hellouser"
    }else{
        message.innerText="please login"
    }
}

let  NewElement=document.createElement("h1")
NewElement.innerText="name"
console.log(NewElement)
