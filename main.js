var asideTaskList = document.querySelector('#aside-task-list');
var asideTask = document.querySelector('.aside-task');
var asideTaskDeleteButton = document.querySelector('.aside-task-delete-button');
var asideTaskListItem = document.querySelector('.aside-task-list-item');
var asideAddTaskInput = document.querySelector('#aside-add-task-input');
var asideAddTaskButton = document.querySelector('#aside-add-task-button');
var errorMsg = document.querySelector('click', '.error-msg');

asideAddTaskButton.addEventListener('click', addTaskToAside);
asideTaskList.addEventListener('click', deleteTaskFromAside);

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

function deleteTaskFromAside() {
  if (event.target.classList.contains('aside-task-delete-img')) {
    console.log('TEST');
    event.target.closest('.aside-task').remove();
  }
};
