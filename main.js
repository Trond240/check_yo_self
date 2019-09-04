var asideTaskList = document.querySelector('#aside-task-list');
var asideTask = document.querySelector('.aside-task');
var asideTaskDeleteButton = document.querySelector('.aside-task-delete-button');
var asideTaskListItem = document.querySelector('.aside-task-list-item');
var asideAddTaskInput = document.querySelector('#aside-add-task-input');
var asideAddTaskButton = document.querySelector('#aside-add-task-button');

asideAddTaskButton.addEventListener('click', addTaskToAside);
asideTaskList.addEventListener('click', deleteTaskFromAside);

function addTaskToAside() {
  asideTaskList.innerHTML += `
  <div class='aside-task'>
    <img class='aside-task-delete-img' src='blue-delete.png'/>
    <p class='aside-task-list-item'>${asideAddTaskInput.value}</p>
  </div>
  `
  event.preventDefault();
};

function deleteTaskFromAside() {
  if (event.target.classList.contains('aside-task-delete-img')) {
    console.log('TEST');
    event.target.closest('.aside-task').remove();
  }
};
