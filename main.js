var asideTaskDeleteButton = document.querySelector('.aside-task-delete-button');
var asideAddTaskInput = document.querySelector('#aside-add-task-input');
var asideAddTaskItem = document.querySelectorAll('.aside-task-list-item');
var asideAddTaskButton = document.querySelector('#aside-add-task-button');
var asideClearButton = document.querySelector('#aside-clear-button');
var asideTask = document.querySelectorAll('.aside-task');
var asideTaskList = document.querySelector('#aside-task-list');
var asideTitleInput = document.getElementById('aside-title-input');
var blankMsg = document.querySelector('.blank-msg');
var cards = document.querySelector('.cards');
var count = 0;
var makeTaskList = document.getElementById('aside-make-button');
var toDoLists = [];
var main = document.querySelector('.cards');

asideAddTaskButton.addEventListener('click', clickAsideAddTaskButton);
asideAddTaskInput.addEventListener('input', enableAddButton);
asideTaskList.addEventListener('click', clickDeleteButtonAside);
asideClearButton.addEventListener('click', clearInput);
asideTitleInput.addEventListener('input', disableMakeTaskListBtn);
makeTaskList.addEventListener('click', makeTaskListButton);
main.addEventListener('click', mainEventListener);

function clickAsideAddTaskButton() {
  addTaskContainerToAside();
  addTaskToAside();
  clearAndDisable();
};

function clickDeleteButtonAside() {
  deleteTaskFromAside()
};

function makeTaskListButton() {
  hideMsg();
  // createTaskObjects();
  var toDoList = makeToDoList();
  clearAsideForm();
  disableMakeTaskListBtn()
};

function mainEventListener() {
  updateTask(event);
  deleteCard(event);
  makeUrgent(event);
};

function makeUrgent(event) {
  if(event.target.classList.contains('urgent-img')) {
    event.target.closest('section').classList.replace('card', 'urgent-card');
    event.target.classList.replace('urgent-img', 'urgent-active-img');
    event.target.src = "images/urgent-active.svg";
  } else if (event.target.classList.contains('urgent-active-img')) {
    event.target.closest('section').classList.replace('urgent-card', 'card');
    event.target.classList.replace('urgent-active-img', 'urgent-img');
    event.target.src = "images/urgent.svg";
  }
};

// function addEventListenerToTasks(toDoList) {
//   var uncheckedItems = document.getElementById(`${toDoList.id}`).querySelectorAll('.card-list-item');
//   for (i = 0; i < uncheckedItems.length; i++) {
//     uncheckedItems[i].addEventListener('click', function(addEventListener) {
//       toDoList.updateTask(event);
//     })
//   }
// }
function updateTask(event) {
  var taskContainer = event.target.parentNode;
  if (event.target.classList.contains('unchecked-box')) {
    event.target.src = 'images/checkbox-active.svg';
    event.target.classList.replace('unchecked-box', 'checked-box');
    taskContainer.classList.add('completed-task');
  } else if (event.target.classList.contains('checked-box')){
    event.target.classList.replace('checked-box', 'unchecked-box');
    event.target.src = 'images/checkbox.svg';
    taskContainer.classList.remove('completed-task');
  }
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

function deleteCard() {
  if (event.target.classList.contains('delete-img')) {
    event.target.closest('section').remove();
  }
};


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

function makeToDoList() {
  var taskItemsArr = document.querySelectorAll('.aside-task-list-item');
  var taskItems = [];
  for (var i = 0; i < taskItemsArr.length; i++) {
    var task = new Task({text: taskItemsArr[i].innerText});
    taskItems.push(task);
  }
  var toDoList = new ToDoList({id: Date.now(), tasks: taskItems, title: asideTitleInput.value});
  toDoLists.push(toDoList);
  showTaskCard(taskItems,toDoList);
  return toDoList;
}

function showTaskCard(taskItems, toDoList) {
  cards.innerHTML = `<section id=${toDoList.id} class='card'>
    <header>
      <h2 class='card-header'>${toDoList.title}</h2>
    </header>
    <label class='card-task-container'>
    ${showTasksFromArr(taskItems)}
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
   </section>` + cards.innerHTML;
  // event.preventDefault();
};

function showTasksFromArr(taskItems) {
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
    <p class='task-on-card'>${taskItems[i].text}</p></div>`
  }
  return cardTasks;
};

function clearInput() {
  event.preventDefault();
  document.querySelectorAll('.input').forEach(function(input) {
  input.value = '';
  });
  document.querySelector('.aside-task-container').innerHTML = "";
};
