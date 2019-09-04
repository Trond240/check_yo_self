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
var cardTaskContainer = document.querySelector('.card-task-container');


asideAddTaskButton.addEventListener('click', clickAsideAddTaskButton);
asideTaskList.addEventListener('click', deleteTaskFromAside);

function clickAsideAddTaskButton() {
  addTaskToAside();
  pushTasks();
}

function addTaskToAside() {
  asideTaskList.innerHTML += `
  <div class='aside-task'>
    <img class='aside-task-delete-img' src='blue-delete.png'/>
    <p class='aside-task-list-item'>${asideAddTaskInput.value}</p>
  </div>
  `
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

makeTaskList.addEventListener('click', showTaskCard);

function showTasksFromArr() {
  for (var i = 0; taskItemsArr.length; i++) {
    cardTaskContainer.innerHTML +=
    `<input type='checkbox' checked='checked'>
    <span class='checkmark'></span>
    <p class='task-on-card'>${taskItemsArr[0]}</p>`
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
    </header>`
    showTasksFromArr();
  //     <form class='card-form'>
  //       showTasksFromArr();
  //       <label class='card-task-container'>
  //         <input type='checkbox' checked='checked'>
  //         <span class='checkmark'></span>
  //         <p class='task-on-card'>Every chance I get, I water the plants.</p>
  //       </label>
  //       <label class='card-task-container'>
  //         <input type='checkbox' checked='checked'>
  //         <span class='checkmark'></span>
  //         <p class='task-on-card'>Lion! Cloth talk.</p>
  //       </label>
  //     </form>
  //     <footer>
  //       <span class='urgent-button-container'>
  //         <button class='urgent-button'>
  //           <img class='urgent-img' src='images/white-lightning.jpg'>
  //           <p class='card-button-label'>URGENT</p>
  //         </button>
  //       </span>
  //       <span class='card-delete-button-container'>
  //         <button class='delete-button' src='images.'>
  //           <p class='card-delete-button'>X</p>
  //           <p class='card-button-label'>DELETE</p>
  //         </button>
  //       </span>
  //     </footer>
  // </section>`
  event.preventDefault();
}
