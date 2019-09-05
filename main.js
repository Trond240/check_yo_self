var asideTaskList = document.querySelector('#aside-task-list');
var asideTask = document.querySelectorAll('.aside-task');
var asideTaskDeleteButton = document.querySelector('.aside-task-delete-button');
// var asideTaskListItem = document.querySelector('.aside-task-list-item');
var asideAddTaskInput = document.querySelector('#aside-add-task-input');
var asideAddTaskButton = document.querySelector('#aside-add-task-button');
var makeTaskList = document.getElementById('aside-make-button');
var cards = document.querySelector('.cards');
var asideTitleInput = document.getElementById('aside-title-input');
var asideAddTaskItem = document.querySelectorAll('.aside-task-list-item');
var blankMsg = document.querySelector('.blank-msg');
var count = 0;
// var errorMsg = document.querySelector('click', '.error-msg');

asideAddTaskButton.addEventListener('click', clickAsideAddTaskButton);
asideTaskList.addEventListener('click', clickDeleteButtonAside);
makeTaskList.addEventListener('click', makeTaskListButton);
asideAddTaskInput.addEventListener('input', enableAddButton);
asideTitleInput.addEventListener('input', disableMakeTaskListBtn);

function clickAsideAddTaskButton() {
  addTaskContainerToAside();
  addTaskToAside();
  // var taskItem = new Task({text: 'hi'});
  // taskItem.sayHi();
  // pushTasks();
  clearAndDisable();
  // console.log(list);
  // count++;
};

function makeTaskListButton() {
  hideMsg();
  showTaskCard();
  // showTasksFromArr(taskItemsArr);
  clearAsideForm();
  // createTaskObjects();
  makeToDoList();
};

function makeToDoList() {
  console.log('hi');
  var taskItemsArr = document.querySelectorAll('.aside-task-list-item');
  var taskItems = [];
  for (var i = 0; i < taskItemsArr.length; i++) {
    var task = new Task(taskItemsArr[i].innerText);
    taskItems.push(task.text);

  }
  var toDoList = new ToDoList(taskItems);
  showTasksFromArr(taskItems);
}

function clickDeleteButtonAside() {
  deleteTaskFromAside()
  deleteFromArray()
}

// function createTaskObjects() {
//   var asideTaskListItem = document.querySelectorAll('.aside-task-list-item');
//   var taskItemsArr = [];
//   var toDoList = new ToDoList({});
//   for (var i = 0; i < count; i++) {
//     toDoList.tasks.push(asideTaskListItem.innerText);
//
//   }
// }

function deleteFromArray() {
  var deleteIndex= taskItemsArr.indexOf();
  taskItemsArr.splice(deleteIndex, 1);
}

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

function clearAsideForm() {
  var asideTaskContainer = document.querySelector('.aside-task-container');
  asideTitleInput.value = '';
  asideTaskContainer.parentNode.removeChild(asideTaskContainer);
};

function enableAddButton() {
  if (asideAddTaskInput.value.length > 0) {
    asideAddTaskButton.disabled = false;
  } else {
    asideAddTaskButton.disabled = true;
  }
};

function clearAndDisable() {
  asideAddTaskInput.value = '';
  asideAddTaskButton.disabled = true;
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

// function pushTasks() {
  // var taskItem = new Task({text: 'hi'});

  // taskItemsArr.push(asideAddTaskInput.value);
// };

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
};
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
            <img class='urgent-img' src='images/urgent.svg'>
            <p class='card-button-label'>URGENT</p>
          </button>
        </span>
        <span class='card-delete-button-container'>
          <button class='delete-button'>
            <img lass='delete-img' src='images/delete.svg' />
            <p class='card-button-label'>DELETE</p>
          </button>
        </span>
      </footer>
   </section>`
  event.preventDefault();
};
