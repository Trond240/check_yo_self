class ToDoList {
  constructor(obj) {
    this.id = obj.id;
    this.title = obj.title;
    this.tasks = obj.tasks;
  }
  saveToStorage() {

  }
  deleteFromStorage() {

  }
  updateToDo(){
    //should update object's title and urgency
  }
  updateTask(event, task) {
    var taskContainer = event.target.parentNode;
    if (event.target.classList.contains('unchecked-box')) {
      event.target.src = 'images/checkbox-active.svg';
      taskContainer.classList.add('completed-task');
    }
  }
}
