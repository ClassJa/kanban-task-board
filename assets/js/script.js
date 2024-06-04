// Retrieve tasks and nextId from localStorage
// make this an array of objects
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
// save the value of tasks as an object
let nextId = JSON.parse(localStorage.getItem("nextId"));

// create an object for 6-8
let taskTitle = JSON.parse(localStorage.getItem("taskTitle"));
let taskDueDate = JSON.parse(localStorage.getItem("taskDueDate"));
let taskDescription = JSON.parse(localStorage.getItem("taskDescription"));
// let = JSON.parse(localStorage.getItem(""));
// let = JSON.parse(localStorage.getItem(""));
let toDoColumn = document.getElementById('to-do-column');
console.log(toDoColumn)
console.log($('#to-do-column'))
let inProgressColumn = document.getElementById('in-progress-column');
let doneColumn = document.getElementById('done-column')


// const task = {
//     id: generateTaskId(),
//     title: $('#taskTitle').val(),
//     desc: $('#taskDescription').val(),
//     dueDate: $('#taskDueDate').val(),
//     taskStatus: $('').val()
//     // figure out taskStatus id 
//     }


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
        console.log(input1.value)
        input2.textContent = input2.value;
        console.log(input2.value)
        input3.textContent = input3.value;
        console.log(input3.value)
    
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


// taskCard = {
//     id: generateTaskId(),
//     title: $(''),
//     desc: $(''),
//     dueDate: $(''),
//     taskStatus: $('')
// }


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
// createTaskCard(task)

console.log(task)

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
    console.log(task)

    // const t = $('div')
    // const taskCard = $('<div>')
    const taskCard = $('div')
    taskCard.addClass('draggable card-header')
    console.log(taskCard)
    // const cardHeader = $('<h2>')
    const cardHeader = $('h2')
    console.log(cardHeader)
    // const cardBody = $('<div>')
    const cardBody = $('div')
    console.log(cardBody)
    // const cardButton = $('<button>')
    const cardButton = $('button')
    console.log(cardButton)
    // taskCard.addClass('draggable')
    taskCard.setAttribute('class', 'draggable card-header')
    // cardHeader.addClass('card-header', 'draggable')
    // cardHeader.createElement('class', '.card-header')
   
    cardHeader.text = task.title
    console.log(cardHeader.textContent)
    cardBody.textContent = task.desc
    console.log(cardBody.textContent)

    taskCard.append(cardHeader)
    taskCard.append(cardBody)
    taskCard.append(cardButton)

    // task.appendChild(taskCard)

    // t.appendChild(taskCard)
    console.log('This is the t', t)
    console.log('This is the task', task)
    
    
    // taskCard.append(cardHeader, cardBody, cardButton)
    // document.createElement('card')
    // console.log(taskCard)

    return taskCard
}
// call this in renderTL function 
createTaskCard(task)
console.log(task)


// Todo: create a function to render the task list and make cards draggable


function renderTaskList() {
    // empty the taskCard by targeting each column 
    for (let task of taskList){
            if (task.taskStatus === 'to-do') {
                toDoColumn.append(createTaskCard(task))
            } else if (task.taskStatus === 'in-progress') {
                inProgressColumn.append(task)
                // figure out how to append in JQUERY
            } else {
                doneColumn.append(task)
                // taskList[i] === doneColumn

        }
    }


    // for (let project of projects) {
    //     if (project.status === 'to-do') {
    //       todoList.append(createProjectCard(project));
    //     } else if (project.status === 'in-progress') {
    //       inProgressList.append(createProjectCard(project));
    //     } else if (project.status === 'done') {
    //       doneList.append(createProjectCard(project));
    //     }
    //   }

    $('.draggable').draggable({
        opacity: 0.7,
        zIndex: 100,
        // ? This is the function that creates the clone of the card that is dragged. This is purely visual and does not affect the data.
        helper: function (e) {
          // ? Check if the target of the drag event is the card itself or a child element. If it is the card itself, clone it, otherwise find the parent card  that is draggable and clone that.
          const original = $(e.target).hasClass('draggable')
            ? $(e.target)
            : $(e.target).closest('.draggable');
          // ? Return the clone with the width set to the width of the original card. This is so the clone does not take up the entire width of the lane. This is to also fix a visual bug where the card shrinks as it's dragged to the right.
          return original.clone().css({
            width: original.outerWidth(),
          });
        },
      });
    // add a draggable class when the card is created 
        

        // when dropped in one of the swim-lanes change the taskStatus accordingly 

       // place ids on the 3 columns to check its status
        // taskList = []
        // console.log("DNExists")
    // for (let i = 0; i < taskList.length; i++){
    //     if (taskList[i].taskStatus === "To-do"){
    //         // place ids on the 3 columns to check its status

    // }
    

    // create a for-loop to check the status of the task is append it to the correct column 
    // for (let i = 0; i <taskList.length; i ++){
    //     if (taskList[i].taskStatus === toDoColumn) {
    //         toDoColumn.appendChild(taskList[i])
    //     } else if (taskList[i].taskStatus === inProgressColumn) {
    //         inProgressColumn.appendChild(taskList[i])
    //     } else {
    //         doneColumn.appendChild(taskList[i])
    //         // taskList[i] === doneColumn
    //     }
    // }

    // taskCard.appendChild(cardHeader)
    // taskCard.appendChild(cardBody)
    // taskCard.setAttribute('class', '.task-card')


    // input1.textContent = input1.value;
    // input2.textContent = input2.value;
    // input3.textContent = input3.value;


}
// renderTaskList()

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
    taskStatus: 'to-do'
    // figure out taskStatus id 
    }
    taskList.push(task)


    // stringify allows for saving to local storage
    // json.parse allows the revert of the string to its original state 
    localStorage.setItem('tasks', JSON.stringify(taskList))
    $('#taskTitle').val(""),
    $('#taskDescription').val(""),
    $('#taskDueDate').val(""),
    console.log(JSON.stringify(taskList))

    renderTaskList()

    // may need to use this for loop later
// for (let i = 0; i < taskList.length; i++){
//     console.log("Items in the task list", taskList[i])
//     renderTaskList()
// }

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
 // when dropped in one of the swim-lanes change the taskStatus accordingly 
//  event.target.id (todo, inprogress, done) -> (gets the location) use this to set the task.taskStatus = 
// target the event that its dropped on and get it's id set the status of the task to the column its dropped on 
}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    renderTaskList()
    $('#taskForm').on('submit', handleAddTask)
     $('#taskDueDate').datepicker();

});

