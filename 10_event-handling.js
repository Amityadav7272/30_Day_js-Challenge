// #Learnings:
//To print the content written inside an input element, you need to access the value of the input field instead of its innerText. The innerText property is used for elements like <div>, <span>, etc., that contain text nodes, but for <input> elements, you should use the value property.
// Using hyphens in IDs is a common practice in HTML and can make your code more readable by separating words. This style is known as kebab-case and is widely used in web development for CSS classes and IDs.
//Event delegation: Capturing and bubbling allow us to implement one of the most powerful event handling patterns called event delegation.
// The idea is that if we have a lot of elements handled in a similar way, then instead of assigning a handler to each of them – we put a single handler on their common ancestor.
//Issue: The error lies in the line document.body.newList.appendChild(newLi);. You are trying to access newList as a property of document.body, which is incorrect. Instead, you should directly append the new list item to newList.



// Task-1
 const button = document.querySelector(`#para-btn`)
 button.addEventListener("click", (e)=>{
    document.querySelector(`#para1`).innerText = `Paragraph Changed`
 })

// Task-2
 document.querySelector(`#image`).addEventListener("dblclick", (e)=>{
        e.target.style.visibility = `hidden`;
    })

// Task-3
 button.addEventListener("mouseover", (e)=>{
    e.target.style.backgroundColor = `magenta`
 })
 
 // Task-4
 button.addEventListener("mouseout", (e)=>{
    e.target.style.backgroundColor = ``
 })
 
// Task-5
 const input1 = document.querySelector(`#keydown`)
 input1.addEventListener("keydown", (e)=>{
    console.log(e.key);
 })
 
 // Task-6
 const input2 = document.querySelector(`#keyup`)
 input2.addEventListener("keyup", (e)=>{
    //  console.log(e.key);
    console.log(e.target.value);
 })

// Task-7
 document.querySelector(`form`)
 .addEventListener("submit", (e)=>{
    e.preventDefault()
    // console.log(e);
    // console.log(e.target[0]);
    console.log(e.target[0].value);
    console.log(e.target[1].value);
 })

// Task-8
 document.querySelector(`#drop-down`)
 .addEventListener("change", (e)=>{
    const selectedValue = document.createElement(`p`)
    selectedValue.innerHTML = `${e.target.value}`
    document.body.appendChild(selectedValue)
 })

// Task-9
const newList = document.querySelector(`#list`)
//  newList.addEventListener("click", (e)=>{
//     console.log(e.target.innerHTML);
//  })
 
 // Task-10
 const newLi = document.createElement(`li`)
 newLi.innerHTML = `Fish`
 newList.appendChild(newLi) //***********************
 newList.addEventListener("dblclick", (e)=>{
 console.log(e.target.innerHTML);
 })
 