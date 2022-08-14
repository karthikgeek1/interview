let createBtn = document.getElementById("task")
let hidden = document.getElementById("hide")
let red1 = document.getElementsByClassName("red1")[0]
let textarea = document.getElementsByClassName("textarea")[0]
let yellow1 = document.getElementsByClassName("yellow1")[0]
let blue1 = document.getElementsByClassName("blue1")[0]
let black1 = document.getElementsByClassName("black1")[0]
let done = document.getElementsByClassName("btn2")[0]
let hid2 = document.getElementsByClassName("hid2")[0]
let taskfield = document.getElementsByClassName("taskfield")[0]
let input = document.getElementById("details")
createBtn.addEventListener("click", ()=>{
  hidden.style.display="block";
})

red1.addEventListener("click", ()=>{
    textarea.style.backgroundColor="red"
})
blue1.addEventListener("click", ()=>{
    textarea.style.backgroundColor="blue"
})
yellow1.addEventListener("click", ()=>{
    textarea.style.backgroundColor="yellow"
})
black1.addEventListener("click", ()=>{
    textarea.style.backgroundColor="black"
})

done.addEventListener("click", ()=>{
    hidden.style.display="none";
    hid2.style.display="block"
    let bcolor = textarea.style.backgroundColor
    taskfield.innerHTML=`<div class="size">${input.value}
    <div class="position">
    <i class="fa-regular fa-trash-can ml-3" id="delete"></i>
    <i class="fa-solid fa-pen-to-square ml-3" id="edit"></i>
    <i class="fa-solid fa-lock ml-3" id="lock"></i>
    </div>
    </div>`
    let createddiv = document.getElementsByClassName("size")[0]
    createddiv.style.backgroundColor=bcolor 
    createddiv.style.color="white"
    setTimeout(()=>{input.value=""}, 1000)
    let deleted = document.getElementById("delete")
    let edited =  document.getElementById("edit")
    let locked = document.getElementById("lock")
    deleted.addEventListener("click", ()=>{
        createddiv.style.display="none"
    })
    edited.addEventListener("click", ()=>{
        createddiv.innerText=""
    })
})
