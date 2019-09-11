class ToDoList {
  constructor(obj) {
    this.id = obj.id;
    this.title = obj.title;
    this.tasks = obj.tasks;
    this.urgent = false;
  }

  saveToStorage() {
  }

  deleteFromStorage() {
  }

  updateToDo(obj){
    this.urgent = !this.urgent;
    //should update object's title and urgency
  }

  // updateTask(event) {
  //   var taskContainer = event.target.parentNode;
  //   }
  //
  };
