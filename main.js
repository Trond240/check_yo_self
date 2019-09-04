var makeTaskList = document.getElementById('aside-make-button');
var cards = document.querySelector('.cards');
var asideTitleInput = document.getElementById('aside-title-input');
var asideAddTaskInput = document.querySelectorAll('.aside-task-list-item');

makeTaskList.addEventListener('click', showTaskCard);

function showTaskCard() {
  console.log('test');
  cards.innerHTML += `<section class='urgent-card'>
    <header>
      <h2 class='card-header'>${asideTitleInput.value}</h2>
    </header>
      <form class='card-form'>
        <label class='card-task-container'>
          <input type='checkbox' checked='checked'>
          <span class='checkmark'></span>
          <p class='task-on-card'>${asideAddTaskInput.innerText}</p>
        </label>
        <label class='card-task-container'>
          <input type='checkbox' checked='checked'>
          <span class='checkmark'></span>
          <p class='task-on-card'>Every chance I get, I water the plants.</p>
        </label>
        <label class='card-task-container'>
          <input type='checkbox' checked='checked'>
          <span class='checkmark'></span>
          <p class='task-on-card'>Lion! Cloth talk.</p>
        </label>
      </form>
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
