window.addEventListener("load",() => {
const form = document.querySelector("#new-task-form");
const input =document.querySelector("#new-task-input");
const listElement = document.querySelector("#tasks");
const searchForm = document.querySelector("#search-form");
const searchInput = document.querySelector("#search-input");

form.addEventListener ("submit",(e)=>{
    e.preventDefault()
   
    //storing the user entered value in a variable called "task"
const task = input.value 

//create div element and class to it for eventual styling
const taskElement = document.createElement ("div");
taskElement.classList.add ("task");

const taskContent = document.createElement("div");
taskContent.classList.add("content");

//append this to a parent taskElement
taskElement.appendChild(taskContent);

const taskInput = document.createElement("input");
taskInput.classList.add("text");
taskInput.type= "text";
taskInput.value = task;
taskInput.setAttribute("readonly","readonly");

//append this to a parent taskContent
taskContent.appendChild(taskInput);

const taskActions = document.createElement ("div");
taskActions.classList.add("actions");
//append this to parent 


const taskEdit = document.createElement("button");
taskEdit.classList.add ("edit");
taskEdit.innerHTML="Edit";

const taskDelete = document.createElement("button");
taskDelete.classList.add ("delete");
taskDelete.innerHTML="delete";

taskActions.appendChild(taskEdit);
taskActions.appendChild(taskDelete);

taskElement.appendChild(taskActions);

listElement.appendChild(taskElement);

input.value="";


//handle the edit button to remove readonly attribute on the input text field and change innerHTML to save

taskEdit.addEventListener ("click",(e) => {
if (taskEdit.innerHTML.toLowerCase()=== "edit"){
    taskEdit.innerText ="save";
    taskInput.removeAttribute("readonly");
    taskInput.focus();
}else {
    taskEdit.innerText = "Edit";
    taskInput.setAttribute("readonly","readonly");
}


})
taskDelete.addEventListener("click",(e) =>{
    listElement.removeChild(taskElement);
})

})     
searchForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const searchText = searchInput.value.toLowerCase();

    const tasks = listElement.querySelectorAll(".task");
    tasks.forEach((task) => {
        const taskText = task.querySelector(".text").value.toLowerCase();
        if (taskText.includes(searchText)) {
            task.style.display = "flex"; 
        } else {
            task.style.display = "none";
        }
    });
}) 
searchInput.addEventListener("input", () => {
    const searchText = searchInput.value.toLowerCase();

    const tasks = listElement.querySelectorAll(".task");
    tasks.forEach((task) => {
        const taskText = task.querySelector(".text").value.toLowerCase();
        if (taskText.includes(searchText)) {
            task.style.display = "flex"; 
        } else {
            task.style.display = "none"; 
        }
    });
});

})
 