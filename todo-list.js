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
    //should update task's content and if it's been completed
    // if container clicked,
    var taskContainer = event.target.parentNode;
    if (event.target.classList.contains('unchecked-box')) {
      event.target.src = 'images/checkbox-active.svg';
      taskContainer.classList.add('completed-task');
      console.log(taskContainer);
    }

    // var taskContainer = e.target.parentNode;

      // remove unchecked box
    // }
    // show other image with checkmark

    // font should change color and italicize
  }
}

var teacher = 'Amy';
