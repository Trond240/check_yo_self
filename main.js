var asideTaskList = document.querySelector('#aside-task-list');
var asideTask = document.querySelectorAll('.aside-task');
var asideTaskDeleteButton = document.querySelector('.aside-task-delete-button');
var asideAddTaskInput = document.querySelector('#aside-add-task-input');
var asideAddTaskButton = document.querySelector('#aside-add-task-button');
var makeTaskList = document.getElementById('aside-make-button');
var cards = document.querySelector('.cards');
var asideTitleInput = document.getElementById('aside-title-input');
var asideAddTaskItem = document.querySelectorAll('.aside-task-list-item');
var blankMsg = document.querySelector('.blank-msg');
var count = 0;
var toDoLists = [];
// var errorMsg = document.querySelector('click', '.error-msg');

asideAddTaskButton.addEventListener('click', clickAsideAddTaskButton);
asideTaskList.addEventListener('click', clickDeleteButtonAside);
makeTaskList.addEventListener('click', makeTaskListButton);
asideAddTaskInput.addEventListener('input', enableAddButton);
asideTitleInput.addEventListener('input', disableMakeTaskListBtn);

function clickAsideAddTaskButton() {
  addTaskContainerToAside();
  addTaskToAside();
  clearAndDisable();
};

function makeTaskListButton() {
  hideMsg();
  // createTaskObjects();
  makeToDoList();
  clearAsideForm();
  disableMakeTaskListBtn()
};

function clickDeleteButtonAside() {
  deleteTaskFromAside()
  deleteFromArray()
};

function addTaskContainerToAside() {
  asideTaskList.innerHTML += `
  <div class='aside-task-container'>
  </div>
  `
  event.preventDefault();
};

function addTaskToAside() {
    var asideTaskContainer = document.querySelector('.aside-task-container');
    asideTaskContainer.innerHTML += `
    <div class='aside-task'>
      <img class='aside-task-delete-img' src='images/delete.svg'/>
      <p class='aside-task-list-item'>${asideAddTaskInput.value}</p>
    </div>
    `
  event.preventDefault();
};

function clearAndDisable() {
  asideAddTaskInput.value = '';
  asideAddTaskButton.disabled = true;
};

function clearAsideForm() {
  var asideTaskContainer = document.querySelector('.aside-task-container');
  asideTitleInput.value = '';
  asideTaskContainer.parentNode.removeChild(asideTaskContainer);
};

// function deleteFromArray() {
//   var deleteIndex= taskItemsArr.indexOf();
//   taskItemsArr.splice(deleteIndex, 1);
// }

function deleteTaskFromAside() {
  if (event.target.classList.contains('aside-task-delete-img')) {
    event.target.closest('.aside-task').remove();
  }
};

function disableMakeTaskListBtn() {
  if (asideTitleInput.value.length > 0) {
    makeTaskList.disabled = false;
  } else {
    makeTaskList.disabled = true;
  }
};

function enableAddButton() {
  if (asideAddTaskInput.value.length > 0) {
    asideAddTaskButton.disabled = false;
  } else {
    asideAddTaskButton.disabled = true;
  }
};

function hideMsg() {
  blankMsg.classList.add('hide-msg');
  event.preventDefault();
};
// global to do list, empty array you fill

function makeToDoList() {
  var taskItemsArr = document.querySelectorAll('.aside-task-list-item');
  var taskItems = [];
  for (var i = 0; i < taskItemsArr.length; i++) {
    var task = new Task({text: taskItemsArr[i].innerText});
    taskItems.push(task);
  }
  var toDoList = new ToDoList({id: Date().now, tasks: taskItems, title: asideTitleInput.value});
  toDoLists.push(toDoList);
  showTaskCard(taskItems,toDoList, task);
}

function showTaskCard(taskItems, toDoList, task) {
  cards.innerHTML += `<section class='urgent-card'>
    <header>
      <h2 class='card-header'>${toDoList.title}</h2>
    </header>
    <label class='card-task-container'>
    ${showTasksFromArr(taskItems, task)}
    </label>
      <footer>
        <span class='urgent-button-container'>
          <button class='urgent-button'>
            <img class='urgent-img' src='images/urgent.svg'>
            <p class='card-button-label'>URGENT</p>
          </button>
        </span>
        <span class='card-delete-button-container'>
          <button class='delete-button'>
            <img class='delete-img' src='images/delete.svg'>
            <p class='card-button-label'>DELETE</p>
          </button>
        </span>
      </footer>
   </section>`
  event.preventDefault();
};

function showTasksFromArr(taskItems, task) {
  // var cardTaskContainer = document.querySelector('.card-task-container');
  // for (var i = 0; i < taskItems.length; i++) {
  //   cardTaskContainer.innerHTML +=
  //   // creating a loop for each task item to show in a list
  //   `<div><input type='checkbox' checked='checked'>
  //   <span class='checkmark'></span>
  //   <p class='task-on-card'>${taskItems[i]}</p></div>`
  // }
  var cardTasks = '';
  for (var i = 0; i < taskItems.length; i++) {
    cardTasks+=
    `<div class='card-list-item'><img class='unchecked-box' src='images/checkbox.svg'/>
    <span class='checkmark'></span>
    <p class='task-on-card'>${task.text}</p></div>`
  }
  return cardTasks;
};
// set up function -- parameter of each item in array
// input array items
// set up loop
// output of each loop cycle will be item on list
// output array items as a list

//instantiate toDoList object
