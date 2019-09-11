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
window.addEventListener('load', retrieveFromStorage);

function retrieveFromStorage() {
  var parsedCards = JSON.parse(localStorage.getItem('stringifiedCards'));
  if (parsedCards.length) {
    instantiateStorage(parsedCards);
    showParsedCards(parsedCards);
  }
};
function showParsedCards(parsedCards) {
  for (var i = 0; i < parsedCards.length; i++) {
    showTaskCard(parsedCards[i].tasks, parsedCards[i]);
  }
};

function instantiateStorage(parsedCards) {
  for (var i = 0; i < parsedCards.length; i++) {
    var toDoList = new ToDoList({id: parsedCards[i].id, tasks: parsedCards[i].tasks, title: parsedCards[i].title});
    for (var j = 0; j < parsedCards[i].tasks.length; j++) {
      var task = new Task({text: parsedCards[i].tasks[j].text, id: parsedCards[i].tasks[j].id});
    }
  toDoLists.push(toDoList);
  }
};

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
  <p data-id='${Date.now()}' class='aside-task-list-item'>${asideAddTaskInput.value}</p>
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
    makeToDoList();
    clearAsideForm();
    disableMakeTaskListBtn();
  }
};

function deleteCard() {
  if (event.target.classList.contains('delete-button')) {
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

function enableDeleteButton(event) {
  console.log(event);
  var listId = event.target.parentNode.parentNode.parentNode.dataset.id;
  var checkCount = 0;
  for (var i = 0; i < toDoLists.length; i++) {
    if (parseInt(listId) === parseInt(toDoLists[i].id)) {
      for (var j = 0; j < toDoLists[i].tasks.length; j++) {
        if (toDoLists[i].tasks[j].checked === true) {
          checkCount++;
        } else {
          checkCount--;
        }
      }
    }
    if (checkCount === toDoLists[i].tasks.length) {
      var buttonPath = event.target.parentElement.parentElement.nextElementSibling.children[1].children[0];
      buttonPath.disabled = false;
    }
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
    var task = new Task({text: taskItemsArr[i].innerText, id: taskItemsArr[i].dataset.id});
    taskItems.push(task);
  }
  var toDoList = new ToDoList({id: Date.now(), tasks: taskItems, title: asideTitleInput.value});
  toDoLists.push(toDoList);
  showTaskCard(taskItems, toDoList);
  toDoList.saveToStorage(toDoLists);
  return toDoList;
};

function updateUrgent(event) {
  for (var i = 0; i < toDoLists.length; i++) {
    if (parseInt(event.target.parentNode.parentNode.parentNode.parentNode.dataset.id) === parseInt(toDoLists[i].id)) {
      toDoLists[i].updateToDo();
    }
  }

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
  updateUrgent(event);
  enableDeleteButton(event);
};

function showTaskCard(taskItems, toDoList) {
  cards.innerHTML = `
  <section data-id=${toDoList.id} class='card'>
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
        </button>
        <p class='card-button-label'>URGENT</p>
      </span>
      <span class='card-delete-button-container'>
        <button class='delete-button' disabled>
        </button>
        <p class='card-button-label'>DELETE</p>
      </span>
    </footer>
   </section>` + cards.innerHTML;
};

function showTasksFromArr(taskItems) {
  var cardTasks = '';
  for (var i = 0; i < taskItems.length; i++) {
    cardTasks += `
    <div data-id='${taskItems[i].id}' class='card-list-item'><img class='unchecked-box' src='images/checkbox.svg'/>
    <p class='task-on-card'>${taskItems[i].text}</p></div>`;
  }
  return cardTasks;
};

function updateTask(event) {
  for (var i = 0; i < toDoLists.length; i++) {
    if (parseInt(event.target.parentElement.parentElement.nextElementSibling.children[1].children[0].dataset.id) === parseInt(toDoLists[i].id)) {
      for (var j = 0; j < toDoLists[i].tasks.length; j++) {
        if (event.target.parentNode.dataset.id === toDoLists[i].tasks[j].id) {
          toDoLists[i].tasks[j].updateCheck();
        }
      }
    }
  }
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

function updateUrgent(event){
  for (var i = 0; i < toDoLists.length; i++) {
    if (parseInt(event.target.parentNode.parentNode.parentNode.parentNode.dataset.id) === parseInt(toDoLists[i].id)) {
      toDoLists[i].updateToDo();
    }
  }
    if (event.target.classList.contains('urgent-img')) {
        event.target.closest('section').classList.replace('card', 'urgent-card');
        event.target.classList.replace('urgent-img', 'urgent-active-img');
        event.target.src = 'images/urgent-active.svg';
      } else if (event.target.classList.contains('urgent-active-img')) {
        event.target.closest('section').classList.replace('urgent-card', 'card');
        event.target.classList.replace('urgent-active-img', 'urgent-img');
        event.target.src = 'images/urgent.svg';
    }
  };
