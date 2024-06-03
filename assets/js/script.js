// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
const addTaskBtn = document.querySelector('.addTaskBtn')
const modalPopUp = document.querySelector('.modal-pop-up')
const openModalBtn = document.querySelector('[data-bs-target]')
const closeModalBtn = document.querySelector('[data-x-button]')
const overlay = document.getElementById('overlay')
const overlayActive = document.querySelector('.active')
const datePicker = document.querySelector('.dueDateBoxInput')

const titleInput = document.querySelector('.titleBoxInput')
const dateInput = document.querySelector('.dueDateBoxInput')
const descriptionInput = document.querySelector('.modal-body')


const input1 = document.querySelector('.input-1')
const input2 = document.querySelector('.input-2')
const input3 = document.querySelector('.task-description')

// const input1 = document.getElementById('input-1')
// const input2 = document.getElementById('input-2')
// const input3 = document.getElementById('task-description')
// const submitBtn = document.getElementById('task-add-btn')
const submitBtn = document.querySelector('.btn-success')
const formListener = document.getElementById('taskForm')


const todoDoDiv = document.getElementById('todo-cards')



// saves the user's input into a variable to use later and render to the screen 

formListener.addEventListener('click', function(event){
    // function ren() {
        // get the user input 
        event.preventDefault
        input1.textContent = input1.value;
        input2.textContent = input2.value;
        input3.textContent = input3.value;
    
    // }
}) 
   

// submitBtn.addEventListener('click', function(event){
//     // function ren() {
//         // get the user input 
//         event.preventDefault
//         input1.textContent = input1.value;
//         console.log(input1.textContent)
//         input2.textContent = input2.value;
//         console.log(input2.textContent)
//         input3.textContent = input3.value;
//         console.log(input3.textContent)
    
//     // }
// }) 

submitBtn.addEventListener('click', function(event){
    event.preventDefault
    // function moveToToDo() {
        // create a div element 
        const todoDiv =  document.createElement('div')
        const divText = document.createElement('div')
        const divHeader = document.createElement('h1')
    
        todoDiv.setAttribute('style', 'backgoround-color: black')
    
        todoDiv.appendChild(divText)
        divText.appendChild(divHeader)
    
        divHeader.textContent = input1.value
        todoDiv.appendChild(divText)
    
    
        // todoDiv.append()
        todoDiv.setAttribute('style', 'display: inline-block')
        // populate the element with info from ren() function 
        todoDiv.innerHTML = [input1.value + " " , input2.value + " " , input3.value]
        console.log(todoDiv.textContent)
        todoDoDiv.innerHTML = todoDiv.textContent
    
    // }
})
    


// submitBtn.addEventListener('click', ren)

// submitBtn.addEventListener('click', moveToToDo)




// const id = document.querySelector('')
// figure out how to access the task id
// const modalBackdrop = document.querySelector('.modal-backdrop')

projectTask = {
    // id: Int32Array,
    // title: $(''),
    // desc: $(''),
    // dueDate: $(''),
    // taskStatus: $('')
}


const 

taskCard = {
    id: generateTaskId(),
    title: $(''),
    desc: $(''),
    dueDate: $(''),
    taskStatus: $('')
}

localStorage.getItem('titleBoxInput')

console.log(titleInput.value)

localStorage.getItem('dueDateBoxInput')

localStorage.getItem('modal-body')

$(function(){
    $(datePicker).datePicker();
})



closeModalBtn.addEventListener('click', function(event){
    event.preventDefault
    modalPopUp.setAttribute('style', 'display: none')
})

openModalBtn.addEventListener('click', function(event){
    event.preventDefault
    modalPopUp.setAttribute('style', 'display: inline-block')

    console.log(openModalBtn.style)
    // openModalBtn.setAttribute('style', 'display: inline-block')
    // openModalBtn.setAttribute('class', 'active')
    // const modal = document.querySelector(button.dataset.modalT)

})

// TODO: Create a new card element and add the classes `card`, `project-card`, `draggable`, and `my-3`. Also add a `data-project-id` attribute and set it to the project id.
  // TODO: Create a new card header element and add the classes `card-header` and `h4`. Also set the text of the card header to the project name.
  // TODO: Create a new card body element and add the class `card-body`.
  // TODO: Create a new paragraph element and add the class `card-text`. Also set the text of the paragraph to the project type.
  // TODO: Create a new paragraph element and add the class `card-text`. Also set the text of the paragraph to the project due date.
  // TODO: Create a new button element and add the classes `btn`, `btn-danger`, and `delete`. Also set the text of the button to "Delete" and add a `data-project-id` attribute and set it to the project id.

// addTaskBtn.addEventListener('click', function(event){
//     event.preventDefault
//     // open up the modal and allow for user to input content in the box's text field
//     console.log("click")

//     if (modalPopUp.display === 'none') {
//         console.log("show")
//         modalPopUp.setAttribute('.modal-pop-up', 'display-block')
//     }
//     // help 
// })

const task = {
    id: generateTaskId(),
    title,
    desc,
    dueDate,
    taskStatus
    // id: generateTaskId(),
    // title: $(''),
    // desc: $(''),
    // dueDate: $(''),
    // taskStatus: $('')
}



// Todo: create a function to generate a unique task id
function generateTaskId() {
    idCount = 0
    if (task.id === NaN || task.id === null) {
        task.id = idCount
        idCount += 1
        console.log(task.id)
    } else {
        task.id = idCount += 1
    }
    task.id = task.id
    return task.id
}

// Todo: create a function to create a task card
function createTaskCard(task) {
    const taskCard = $('<div>')
    const cardHeader = $('<div>')
    cardHeader.addClass('card-header', 'draggable')
    // cardHeader.createElement('class', '.card-header')
    cardHeader.textContent = "This is the header"
    taskCard.append(cardHeader)
    // document.createElement('card')
    console.log(taskCard)

    // how to incorporate the task parameter? 
}

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    const taskCard = $('<div>')
    const cardHeader = $('<div>')
    const cardBody = $('<div>')
    cardHeader.textContent = input1.value
    cardBody.textContent = input2.value
    taskCard.appendChild(cardHeader)
    taskCard.appendChild(cardBody)
    taskCard.setAttribute('class', '.task-card')


    // input1.textContent = input1.value;
    // input2.textContent = input2.value;
    // input3.textContent = input3.value;


}
renderTaskList()

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
  const id = $(this).attr('data-project-id');
  const projects = readProjectsFromStorage();
  // TODO: Loop through the projects array and remove the project with the matching id.

  // ? We will use our helper function to save the projects to localStorage
  saveProjectsToStorage(projects);

  // ? Here we use our other function to print projects back to the screen
  printProjectData();
}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});

