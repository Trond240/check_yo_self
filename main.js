var asideTaskList = document.querySelector('#aside-task-list');
var asideTask = document.querySelector('.aside-task');
var asideTaskDeleteButton = document.querySelector('.aside-task-delete-button');
var asideTaskListItem = document.querySelector('.aside-task-list-item');
var asideAddTaskInput = document.querySelector('#aside-add-task-input');
var asideAddTaskButton = document.querySelector('#aside-add-task-button');
var makeTaskList = document.getElementById('aside-make-button');
var cards = document.querySelector('.cards');
var asideTitleInput = document.getElementById('aside-title-input');
var asideAddTaskItem = document.querySelectorAll('.aside-task-list-item');
var taskItemsArr = [];

var errorMsg = document.querySelector('click', '.error-msg');


asideAddTaskButton.addEventListener('click', clickAsideAddTaskButton);
asideTaskList.addEventListener('click', deleteTaskFromAside);
makeTaskList.addEventListener('click', makeTaskListButton);

function clickAsideAddTaskButton() {
  addTaskToAside();
  pushTasks();
}

function makeTaskListButton() {
  showTaskCard()
  showTasksFromArr(taskItemsArr)
}

function addTaskToAside() {
  if (asideAddTaskInput.value.length > 0) {
    asideTaskList.innerHTML += `
    <div class='aside-task'>
      <img class='aside-task-delete-img' src='images/delete.svg'/>
      <p class='aside-task-list-item'>${asideAddTaskInput.value}</p>
    </div>
    `
  } else {
    errorMsg.classList.add('show-msg');
  }
  event.preventDefault();
};

function pushTasks() {
  taskItemsArr.push(asideAddTaskInput.value);
}

function deleteTaskFromAside() {
  if (event.target.classList.contains('aside-task-delete-img')) {
    console.log('TEST');
    event.target.closest('.aside-task').remove();
  }
};

function showTasksFromArr(taskItems) {
  var cardTaskContainer = document.querySelector('.card-task-container');
  for (var i = 0; i < taskItems.length; i++) {
    cardTaskContainer.innerHTML +=
    `<div><input type='checkbox' checked='checked'>
    <span class='checkmark'></span>
    <p class='task-on-card'>${taskItems[i]}</p></div>`
  }
}
// set up function -- parameter of each item in array
// input array items
// set up loop
// output of each loop cycle will be item on list
// output array items as a list

//instantiate toDoList object
function showTaskCard() {
  console.log('test');
  cards.innerHTML += `<section class='urgent-card'>
    <header>
      <h2 class='card-header'>${asideTitleInput.value}</h2>
    </header>
    <label class='card-task-container'>
    </label>
      <footer>
        <span class='urgent-button-container'>
          <button class='urgent-button'>
            <img class='urgent-img' src='images/white-lightning.jpg'>
            <p class='card-button-label'>URGENT</p>
          </button>
        </span>
        <span class='card-delete-button-container'>
          <button class='delete-button' src='images.'>
            <p class='card-delete-button'>X</p>
            <p class='card-button-label'>DELETE</p>
          </button>
        </span>
      </footer>
   </section>`
  event.preventDefault();
}
