// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
let taskTitle = JSON.parse(localStorage.getItem("taskTitle"));
let taskDueDate = JSON.parse(localStorage.getItem("taskDueDate"));
let taskDescription = JSON.parse(localStorage.getItem("taskDescription"));
let = JSON.parse(localStorage.getItem(""));
let = JSON.parse(localStorage.getItem(""));


// const addTaskBtn = document.querySelector('.addTaskBtn')
// const modalPopUp = document.querySelector('.modal-pop-up')
const openModalBtn = document.querySelector('[data-bs-target]')
const closeModalBtn = document.querySelector('[data-x-button]')
// const overlay = document.getElementById('overlay')
// const overlayActive = document.querySelector('.active')
const datePicker = document.getElementById('taskDueDate')

// const titleInput = document.querySelector('.titleBoxInput')
// const dateInput = document.querySelector('.dueDateBoxInput')
const descriptionInput = document.querySelector('.modal-body')


const input1 = document.querySelector('.input-1')
const input2 = document.querySelector('.input-2')
const input3 = document.querySelector('.task-description')
const taskStatus = document.querySelector('.card-title')

console.log(taskStatus)

// figure out how to set a status on the columns to see if they are in-progress, To-do, and done 

// const input1 = document.getElementById('input-1')
// const input2 = document.getElementById('input-2')
// const input3 = document.getElementById('task-description')
// const submitBtn = document.getElementById('task-add-btn')
// change the class selector to have it make more sense/logical
const submitBtn = document.querySelector('.add-task-submit')

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

// submitBtn.addEventListener('click', moveToToDo(event))
submitBtn.click(moveToToDo)

function moveToToDo(event) {
    console.log("start the function")
    event.preventDefault
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

}


taskCard = {
    id: generateTaskId(),
    title: $(''),
    desc: $(''),
    dueDate: $(''),
    taskStatus: $('')
}

// collect info, store it in taskList array, renderTaskList()

localStorage.getItem('titleBoxInput')

// console.log(titleInput.value)

localStorage.getItem('dueDateBoxInput')

localStorage.getItem('modal-body')




// openModalBtn.addEventListener('click', function(event){
//     event.preventDefault()

// })

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

// const task = {
//     id: generateTaskId(),
    // title,
    // desc,
    // dueDate,
    // taskStatus
    // id: generateTaskId(),
    // title: $(''),
    // desc: $(''),
    // dueDate: $(''),
    // taskStatus: $('')
// }


const task = {
    id: generateTaskId(),
    title: $('#taskTitle').val(),
    desc: $('#taskDescription').val(),
    dueDate: $('#taskDueDate').val(),
    taskStatus: $('').val(),
    // figure out taskStatus id 
}



// Todo: create a function to generate a unique task id
function generateTaskId() {
    if (nextId) {
        nextId += 1
        console.log(nextId)
    } else {
        nextId = 1
        console.log(nextId)
    }
}
  
// HELP debug why the task object isn't accessible in the createTaskCard function

// Todo: create a function thats create a task card
function createTaskCard(task) {
    // task is the object with many properties
    console.log(this.task)
    const taskCard = $('<div>')
    console.log(taskCard)
    const cardHeader = $('<h2>')
    console.log(cardHeader)
    const cardBody = $('<div>')
    console.log(cardBody)
    const cardButton = $('<button>')
    console.log(cardButton)
    taskCard.addClass('draggable')
    cardHeader.addClass('card-header', 'draggable')
    // cardHeader.createElement('class', '.card-header')
   
    cardHeader.textContent = task.title.value
    cardBody.textContent = task.desc.value
    taskCard.append(cardHeader, cardBody, cardButton)
    // document.createElement('card')
    console.log(taskCard)

    return task
}
createTaskCard()


// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    if (!taskList) {
        taskList = []
        console.log("DNExists")
    } 
    for (let i = 0; i < taskList.length; i++){
        if (taskList[i].taskStatus === "To-do"){
            // place ids on the 3 columns to check its status

    }
}
    // create a for-loop to check the status of the task is append it to the correct column 
  

    // taskCard.appendChild(cardHeader)
    // taskCard.appendChild(cardBody)
    // taskCard.setAttribute('class', '.task-card')


    // input1.textContent = input1.value;
    // input2.textContent = input2.value;
    // input3.textContent = input3.value;


}
renderTaskList()

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    event.preventDefault();
    console.log("handle task")
    console.log($('#taskTitle').val())

    const task = {
    id: generateTaskId(),
    title: $('#taskTitle').val(),
    desc: $('#taskDescription').val(),
    dueDate: $('#taskDueDate').val(),
    taskStatus: $('').val()
    // figure out taskStatus id 
    }

taskList.push(task)
for (let i = 0; i < taskList.length; i++){
    console.log("Items in the task list", taskList[i])
    localStorage.setItem('tasks', JSON.stringify(task))
    renderTaskList()
}

// uncomment soon 
// console.log("Items in the task list", taskList)
// localStorage.setItem('tasks', JSON.stringify(task))
// renderTaskList()
// $('#taskTitle').val('')
}


// Todo: create a function to handle deleting a task
function handleDeleteTask(event){
    event.preventDefault()
    const id = $(this).attr('data-project-id');
    const projects = readProjectsFromStorage();
  // TODO: Loop through the projects array and remove the project with the matching id.
  for (let i = 0; i < taskList.length; i ++){
    if (taskList[i].id === event.id){
        task[i].id.val = ''
        task[i].title.val = ''
        task[i].desc.val = ''
        task[i].dueDate.val = ''
        task[i].taskStatus.val = ''
        // id: generateTaskId("").val(''),
        // title: $('#taskTitle').val(''),
        // desc: $('#taskDescription').val(''),
        // dueDate: $('#taskDueDate').val(''),
        // taskStatus: $('').val("")
    }
  }
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
    renderTaskList()
    $('#taskForm').on('submit', handleAddTask)
     $('#taskDueDate').datepicker();

});

