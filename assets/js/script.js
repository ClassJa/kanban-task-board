// Retrieve tasks and nextId from localStorage
// make this an array of objects
let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
// save the value of tasks as an object
let nextId = JSON.parse(localStorage.getItem("nextId"));

// create an object for 6-8
let taskTitle = JSON.parse(localStorage.getItem("#taskTitle"));
// let taskTitle = JSON.parse(localStorage.content = $('taskTitle').html)
let taskDueDate = JSON.parse(localStorage.getItem("#taskDueDate"));
let taskDescription = JSON.parse(localStorage.getItem("#taskDescription"));
let toDoColumn = $('#to-do-column');
let inProgressColumn = $('#in-progress-column');
let doneColumn = $('#done-column')
// const deleteBtn = $('.deleteBtn')
// const openModalBtn = $('[data-bs-target]')
// const closeModalBtn = $('[data-x-button]')
const datePicker = $('#taskDueDate')
// const descriptionInput = $('.modal-body')

// const taskStatus = $('.card-title')
// const submitBtn = $('.add-task-submit')
const formListener = $('#taskForm')
// const todoDoDiv = $('#todo-cards')


// saves the user's input into a variable to use later and render to the screen 


    function ren(event) {
        const input1 = $('.input-1')
        const input2 = $('.input-2')
        const input3 = $('.task-description')
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

const task = {
    id: generateTaskId(),
    title: $('#taskTitle').val(),
    desc: $('#taskDescription').val(),
    dueDate: $('#taskDueDate').val(),
    taskStatus: 'to-do'
    // $('').val(), above for task status
    // figure out taskStatus id 
}
// createTaskCard(task)

console.log(task)

// Todo: create a function to generate a unique task id
function generateTaskId() {
    if (nextId) {
        localStorage.setItem('nextId', nextId += 1)
        console.log(nextId)
    } else {
        nextId = 1
        localStorage.setItem('nextId', nextId)
        console.log(nextId)
    }
    return nextId
}

// uses jquery to create and format a newly added task card that includes a header section with a title, a body section with the task description, and the due date as well as a delete button
function createTaskCard(task) {

    const taskCard = $('<div>').addClass('draggable, card-header').attr('nextId', task.id)
    const cardHeader = $('<div>').addClass('card-header h2').text(task.title)
    const cardBody = $('<div>').addClass('card-body')
    const cardDescription = $('<p>').addClass('task-description').text(task.desc)
    const cardDueDate = $('<p>').addClass('input-2').text(task.dueDate)
    const cardDelete = $('<button>').addClass('deleteBtn').text('Delete')
    cardBody.append(cardDescription, cardDueDate)
    taskCard.append(cardHeader, cardBody, cardDelete)

    return taskCard
}


// Clears the form entries each time the user wants to add a new card to the board, checks to see the status of the task card, and displays the task card in the correct column based on status
// add the draggable functionality so that the tasks can be actively updated by the user based on the task status
function renderTaskList() {
   
    $('#to-do-column, #in-progress-column, #done-column').empty();

    for (let task of taskList){
        if (task.taskStatus === 'to-do') {
            toDoColumn.append(createTaskCard(task))
        } else if (task.taskStatus === 'in-progress-column') {
            inProgressColumn.append(createTaskCard(task))
            // figure out how to append in JQUERY
        } else {
            doneColumn.append(createTaskCard(task))
            // taskList[i] === doneColumn
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
        }
    }
    
}
// renderTaskList()

// Todo: create a function to handle adding a new task
// Collects the user inputs from the form and creates a task card with those details, when card is created, it is push onto a task list in order to be displayed to the screenand saved to local storage in the correct order 
function handleAddTask(event){
    event.preventDefault();
    title = $('taskTitle').val('')
    desc = $('taskDescription').val('')
    dueDate = $('taskDueDate').val('')

    console.log("handle task")
    console.log($('#taskTitle').val())

    const task = {
    id: generateTaskId(),
    title: $('#taskTitle').val(),
    desc: $('#taskDescription').val(),
    dueDate: $('#taskDueDate').val(),
    taskStatus: 'to-do',
    }
    taskList.push(task)


    // stringify allows for saving to local storage
    // json.parse allows the revert of the string to its original state 
    localStorage.setItem('tasks', JSON.stringify(taskList))
    console.log(JSON.stringify(taskList))

    renderTaskList()
    // return 
}


// Todo: create a function to handle deleting a task



function handleDeleteTask(){
    console.log('delete clicked')
    // const id = localStorage.getItem(($(this).attr('nextId')));

    // pick up here with debugging 
    const id = $(this).attr('nextId');
    
  // TODO: Loop through the projects array and remove the project with the matching id.
  for (let i = 0; i < taskList.length; i ++){
    if (taskList[i].id === id){
        taskList.pop(taskList[i])
        localStorage.setItem('nextId', '')
        // taskList.splice(taskList[i], 1)
        // taskList[i].id = ''
        // task[i].id.val = ''
        // task[i].title.val = ''
        // task[i].desc.val = ''
        // task[i].dueDate.val = ''
        // task[i].taskStatus.val = ''
       
    }
  }
}


$(document).on('click', '.deleteBtn', handleDeleteTask)

function tasksInTaskList() {
    let tasks = JSON.parse(localStorage.getItem('tasks'))

    if (!tasks) {
        tasks = []
    }

    return tasks
}


// function calculates what day it is, and shows it on screen 
function displayDate() {
    const date = dayjs().format('MMM DD, YYYY');
    timeDisplayEl.text(date);
  }


// Todo: create a function to handle dropping a task into a new status lane
// when the user clicks a task card and moves it to another column, the specified task should change position 
function handleDropEvent(event, ui) {
    taskList = tasksInTaskList()
    const IdOfTask = ui.draggable[0].dataset.taskId;
    const newTaskStatus = event.target.id;

        for (let task of taskList) {
            if (task.id === IdOfTask) {
                task.taskStatus = newTaskStatus
            }
        }
        localStorage.setItem('tasks', JSON.stringify(tasks))
        renderTaskList()
    }
 // when dropped in one of the swim-lanes change the taskStatus accordingly 
//  event.target.id (todo, inprogress, done) -> (gets the location) use this to set the task.taskStatus = 
// target the event that its dropped on and get it's id set the status of the task to the column its dropped on 




// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
    renderTaskList()
    $('#taskForm').on('submit', handleAddTask)
     $('#taskDueDate').datepicker();

});

