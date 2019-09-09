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
  updateTask(event) {
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
  }

  // checkChecked() {
  //   for (var i = 0; i < ) {
  //
  //   }
  // }

}
