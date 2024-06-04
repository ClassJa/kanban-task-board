// Retrieve tasks and nextId from localStorage
// make this an array of objects
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
// save the value of tasks as an object
let nextId = JSON.parse(localStorage.getItem("nextId"));

// create an object for 6-8
let taskTitle = JSON.parse(localStorage.getItem("taskTitle"));
let taskDueDate = JSON.parse(localStorage.getItem("taskDueDate"));
let taskDescription = JSON.parse(localStorage.getItem("taskDescription"));

let toDoColumn = $('#to-do-column');
console.log(toDoColumn)
console.log($('#to-do-column'))
let inProgressColumn = $('#in-progress-column');
let doneColumn = $('#done-column')




const openModalBtn = $('[data-bs-target]')
const closeModalBtn = $('[data-x-button]')

const datePicker = $('#taskDueDate')

const descriptionInput = $('.modal-body')


const input1 = $('.input-1')
const input2 = $('.input-2')
const input3 = $('.task-description')
const taskStatus = $('.card-title')


const submitBtn = $('.add-task-submit')

const formListener = $('#taskForm')


const todoDoDiv = $('#todo-cards')


// saves the user's input into a variable to use later and render to the screen 


    function ren(event) {
        // get the user input 
        event.preventDefault
        input1.text = input1.val();
        console.log(input1.val())
        input2.text = input2.val();
        console.log(input2.val())
        input3.text = input3.val();
        console.log(input3.val())
    
    // }
}
// $('#taskForm').on('click', ren)
formListener.on('click', ren)
   

// submitBtn.addEventListener('click', moveToToDo(event))
// submitBtn.click(moveToToDo)

// function moveToToDo(event) {
//     console.log("start the function")
//     event.preventDefault
//     // create a div element 
//     const todoDiv =  $('div')
//     const divText = $('div')
//     const divHeader = $('h1')

//     todoDiv.setAttribute('style', 'backgoround-color: black')

//     todoDiv.appendChild(divText)
//     divText.appendChild(divHeader)

//     divHeader.textContent = input1.value
//     todoDiv.appendChild(divText)


//     // todoDiv.append()
//     todoDiv.setAttribute('style', 'display: inline-block')
//     // populate the element with info from ren() function 
//     todoDiv.innerHTML = [input1.value + " " , input2.value + " " , input3.value]
//     console.log(todoDiv.textContent)
//     todoDoDiv.innerHTML = todoDiv.textContent

// }


// collect info, store it in taskList array, renderTaskList()

// localStorage.getItem('titleBoxInput')

// console.log(titleInput.value)

// localStorage.getItem('dueDateBoxInput')

// localStorage.getItem('modal-body')


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

// Todo: create a function thats create a task card
// uses jquery to create and format a newly added task card 
function createTaskCard(task) {
    // task is the object with many properties

    const taskCard = $('<div>')
    .addClass('draggable card-header')
    .attr('nextId', task.id)
    const cardHeader = $('<div>').addClass('card-header h2').text(task.title)
    const cardBody = $('<div>').addClass('card-body')
    const cardDescription = $('<p>').addClass('task-description').text(task.desc)
    const cardDueDate = $('<p>').addClass('input-2').text(task.dueDate)
    cardBody.append(cardDescription, cardDueDate)
    const cardButton = $('<button>')
    // .attr('nextId', task.id)
    console.log(cardButton)


    taskCard.append(cardHeader, cardBody, cardButton)
  

    return taskCard
}



// Todo: create a function to render the task list and make cards draggable

function renderTaskList() {
    // empty the taskCard by targeting each column 
    $('#to-do-column').empty()
    $('#in-progress').empty()
    $('#done').empty()
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
    createTaskCard(task)

    // makes the element that has a draggable class attached to it draggable using the jquery function 
    $('.draggable').draggable({
        opacity: 0.7,
        zIndex: 100,

        helper: function (e) {
          
          const original = $(e.target).hasClass('ui-draggable')
            ? $(e.target)
            : $(e.target).closest('.ui-draggable');
         
          return original.clone().css({
            width: original.outerWidth(),
          });
        },
      });
    // add a draggable class when the card is created 
    
    
}
// renderTaskList()

// Todo: create a function to handle adding a new task
function handleAddTask(event){
    event.preventDefault();
    // figure out how to clear the selections so that the tasks are duplicated when rendered to the screen 
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
    // $('#taskTitle').val(""),
    // $('#taskDescription').val(""),
    // $('#taskDueDate').val(""),
    console.log(JSON.stringify(taskList))

    renderTaskList()
    

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

