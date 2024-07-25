// #Learnings:
//getElementByClassName returns a HTMLCollection so you can not directly apply style on it and you have to select index for it.
//To Modify CSS Classes in JavaScript: https://www.digitalocean.com/community/tutorials/js-classlist


// Task-1
 document.getElementById(`rand-para`).innerText = `Everything is changed`

// Task-2  ******************
const upper = document.getElementsByClassName(`upper`)
// console.log(upper);
//  const upper = document.querySelector(`.upper`)
 upper[0].style.backgroundColor = 'aliceblue'

// Task-3
 const newDiv = document.createElement(`div`)
 newDiv.id = `newDiv`
 newDiv.innerText = `Hello everyone I am new div`
 //  document.appendChild(newDiv) ::Uncaught DOMException: Failed to execute 'appendChild' on 'Node': Only one element on document allowed.
 document.body.appendChild(newDiv)

// Task-4
 const newLi = document.createElement(`li`)
 newLi.textContent = `Projects`
 const list = document.querySelector(`.list`)
 list.appendChild(newLi)

// Task-5
 document.body.removeChild(newDiv)
 
 // Task-6
 list.removeChild(newLi)

// Task-7
 const image = document.querySelector(`img`)
 image.setAttribute(`src`, `https://images.pexels.com/photos/27108021/pexels-photo-27108021/free-photo-of-a-building-with-a-red-and-white-clock-on-it.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load`)

// Task-8
 list.classList.add(`bold`)
 console.log(list.classList)
 list.classList.remove(`list`)
 console.log(list.className)
//  list.setAttribute(`class`, `bold`) //here you will remove previous classes

// Task-9
 const newPara = document.querySelector(`.lower`)
 document.querySelector(`#btn`)
 .addEventListener("click", (e)=>{
    newPara.style.color = `#419141`
 })


// Task-10
 document.querySelector(`img`).addEventListener("mouseover",(e)=>{
    e.target.style.borderColor = `red`
 })