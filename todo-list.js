class ToDoList {
  constructor(obj) {
    this.id = obj.id;
    this.title = obj.title;
    this.tasks = obj.tasks;
    this.urgent = false;
  }

  deleteFromStorage() {
  }

  updateToDo(obj) {
    this.urgent = !this.urgent;
  }
};
