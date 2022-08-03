// refer: https://blog.webdevsimplified.com/2022-01/event-listeners/

const grandparent=document.querySelector(".grandparent")
const parent=document.querySelector(".parent")
const child=document.querySelector(".child")

// addEventListener takes two or three parameters
// 1st= type of event you are listening to
// 2nd = call back (e =>) = function that runs every time we do whatever the event is
 // 3rd = adding capturing option (usually optional)

// babling( inside out)
grandparent.addEventListener("click", e =>{
    console.log("Grandparent 1")
})

grandparent.addEventListener("click", e =>{
    console.log("parent 1")
})

grandparent.addEventListener("click", e =>{
    console.log("child 1")
})

document.addEventListener("click", e =>{
    console.log("Document 1")
})
 
//capture (outside in)
grandparent.addEventListener("click", e =>{
    console.log("parent capture")
},
    {capture: true}
)

// stop capturing and babbling using and event (e.stopPropagation)

grandparent.addEventListener("click", e =>{
    e.stopPropagation()
    console.log("parent capture")
},
    {capture: true}
)

// set event run one time only and not run again

grandparent.addEventListener("click", e =>{
    console.log("parent 1")
}, 
{once: true}
)

// how to remove event listener based on a given time
grandparent.addEventListener("click", printHello)

 setTimeout(() =>{
    parent.removeEventListener("click", printHello)
 }, 2000)
    

 function printHello(){
    console.log("hey")
 }

 // how to delegate elements or add page elements dynamically
 // make all div our page to print hey
 const divs= document.querySelectorAll("div")

 divs.forEach(div => {
    div.addEventListener("click", () => {
        console.log("hello")
    })
 })

// buttons

const buttons = document.querySelectorAll("button")
buttons.forEach(button => {
  button.addEventListener("click", () => {
    console.log("Clicked Button")
  })
})

const newButton = document.createElement("button")
document.body.append(newButton)



