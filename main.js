var aside = document.querySelector('aside');
var asideAddTaskInput = document.querySelector('#aside-add-task-input');
var asideAddTaskItem = document.querySelectorAll('.aside-task-list-item');
var asideAddTaskButton = document.querySelector('.aside-add-task-button');
var asideClearButton = document.querySelector('.aside-clear-button');
var asideTask = document.querySelectorAll('.aside-task');
var asideTaskDeleteButton = document.querySelector('.aside-task-delete-button');
var asideTaskList = document.querySelector('#aside-task-list');
var asideTitleInput = document.getElementById('aside-title-input');
var blankMsg = document.querySelector('.blank-msg');
var cards = document.querySelector('.cards');
var count = 0;
var main = document.querySelector('.cards');
var makeTaskList = document.querySelector('.aside-make-button');
var toDoLists = [];

aside.addEventListener('click', asideEventListener);
asideTitleInput.addEventListener('input', disableMakeTaskListBtn);
main.addEventListener('click', mainEventListener);

function addTaskContainerToAside() {
  asideTaskList.innerHTML += `
  <div class='aside-task-container'>
  </div>`;
  event.preventDefault();
};

function addTaskToAside() {
  var asideTaskContainer = document.querySelector('.aside-task-container');
  asideTaskContainer.innerHTML += `
  <div class='aside-task'>
  <img class='aside-task-delete-img' src='images/delete.svg'/>
  <p class='aside-task-list-item'>${asideAddTaskInput.value}</p>
  </div>`;
  event.preventDefault();
};

function asideEventListener(event) {
  if (asideAddTaskInput.value.length > 0) {
    clickAsideAddTaskButton(event);
  }
  deleteTaskFromAside(event);
  clearInput(event);
  clickAsideMakeButton(event);
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

function clearInput(event) {
  var asideTaskContainer = document.querySelector('.aside-task-container');
  if (event.target.classList.contains('aside-clear-button')) {
    event.preventDefault();
    document.querySelectorAll('.input').forEach(function(input) {
      input.value = '';
    });
    asideTaskContainer.parentNode.removeChild(asideTaskContainer);
  }
};

function clickAsideAddTaskButton(event) {
  if (event.target.classList.contains('plus-img')) {
    addTaskContainerToAside();
    addTaskToAside();
    clearAndDisable();
  }
};

function clickAsideMakeButton(event) {
  if (event.target.classList.contains('aside-make-button')) {
    hideMsg();
    var toDoList = makeToDoList();
    clearAsideForm();
    disableMakeTaskListBtn();
  }
};

function deleteCard() {
  if (event.target.classList.contains('delete-img')) {
    event.target.closest('section').remove();
  }
};

function deleteTaskFromAside(event) {
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

function hideMsg() {
  blankMsg.classList.add('hide-msg');
  event.preventDefault();
};

function randomNum() {
  var max = 1000;
  var min = 1;
  var randomNumber =  Math.floor(Math.random() * (+max - +min)) + +min;
  return randomNumber;
};

function makeToDoList() {
  var taskItemsArr = document.querySelectorAll('.aside-task-list-item');
  var taskItems = [];
  for (var i = 0; i < taskItemsArr.length; i++) {
    var taskIDGenerator = Date.now() * randomNum();
    var task = new Task({text: taskItemsArr[i].innerText, id: taskIDGenerator});
    taskItems.push(task);
  }
  var toDoList = new ToDoList({id: Date.now(), tasks: taskItems, title: asideTitleInput.value});
  toDoLists.push(toDoList);
  showTaskCard(taskItems,toDoList, task);
  return toDoList;
};

function makeUrgent(event) {
  if(event.target.classList.contains('urgent-img')) {
    event.target.closest('section').classList.replace('card', 'urgent-card');
    event.target.classList.replace('urgent-img', 'urgent-active-img');
    event.target.src = 'images/urgent-active.svg';
  } else if (event.target.classList.contains('urgent-active-img')) {
    event.target.closest('section').classList.replace('urgent-card', 'card');
    event.target.classList.replace('urgent-active-img', 'urgent-img');
    event.target.src = 'images/urgent.svg';
  }
};

function mainEventListener() {
  updateTask(event);
  deleteCard(event);
  makeUrgent(event);
};

function showTaskCard(taskItems, toDoList, task) {
  cards.innerHTML = `
  <section id=${toDoList.id} class='card'>
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
   </section>` + cards.innerHTML;
};

function showTasksFromArr(taskItems, task) {
  var cardTasks = '';
  for (var i = 0; i < taskItems.length; i++) {
    cardTasks += `
    <div data-id='${task.id}' class='card-list-item'><img class='unchecked-box' src='images/checkbox.svg'/>
    <p class='task-on-card'>${taskItems[i].text}</p></div>`;
  }
  return cardTasks;
};

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
  // event.target on the div that the taks is inside --> pull the data attribute/id todolists.tasks
  // with loop to match id from array
  // conditional to change checked.true/false
};

function updateTaskObj(event) {

}
