// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));
const addTaskBtn = document.querySelector('.addTaskBtn')
const modalPopUp = document.querySelector('.modal-pop-up')

projectTask = {
    // id: Int32Array,
    // title: $(''),
    // desc: $(''),
    // dueDate: $(''),
    // taskStatus: $('')
}


// taskCard = {
//     id: $(''),
//     title: $(''),
//     desc: $(''),
//     dueDate: $(''),
//     taskStatus: $('')
// }


// TODO: Create a new card element and add the classes `card`, `project-card`, `draggable`, and `my-3`. Also add a `data-project-id` attribute and set it to the project id.
  // TODO: Create a new card header element and add the classes `card-header` and `h4`. Also set the text of the card header to the project name.
  // TODO: Create a new card body element and add the class `card-body`.
  // TODO: Create a new paragraph element and add the class `card-text`. Also set the text of the paragraph to the project type.
  // TODO: Create a new paragraph element and add the class `card-text`. Also set the text of the paragraph to the project due date.
  // TODO: Create a new button element and add the classes `btn`, `btn-danger`, and `delete`. Also set the text of the button to "Delete" and add a `data-project-id` attribute and set it to the project id.

addTaskBtn.addEventListener('click', function(event){
    event.preventDefault
    // open up the modal and allow for user to input content in the box's text field
    console.log("click")
    if (modalPopUp.display === 'none') {
        console.log("show")
        modalPopUp.setAttribute('.modal-pop-up', 'display-block')
    }
    // help 
})





// Todo: create a function to generate a unique task id
function generateTaskId() {
    idCount = 0
    if (projectTask.id === NaN || projectTask.id === null) {
        projectTask.id = idCount
        idCount += 1
        console.log(projectTask.id)
    }
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


}

// Todo: create a function to handle adding a new task
function handleAddTask(event){

}

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});
