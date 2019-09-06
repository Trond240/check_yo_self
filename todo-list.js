class ToDoList {
  constructor(obj) {
    // this.id = obj.id;
// should have a unique identifier -- can find out what time/date something happened -- timestamp?
    this.title = obj.title;
    // this.urgent = false
// pass in the unique ID when instantiating an object as an argument
    this.tasks = obj.tasks;
  }
  saveToStorage() {

  }
  deleteFromStorage() {

  }
  updateToDo(){
    //should update object's title and urgency
  }
  updateTask() {
    //should update task's content and if it's been completed
    obj.tasks.push(task.text);
  }
}

var teacher = 'Amy';
