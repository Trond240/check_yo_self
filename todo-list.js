class ToDoList {
  constructor(obj) {
    this.id = obj.id;
    this.title = obj.title;
    this.tasks = obj.tasks;
    this.urgent = false;
  }

  saveToStorage(toDoLists) {
    console.log('start');
    var stringifiedArr = JSON.stringify(toDoLists);
    console.log(stringifiedArr);
    localStorage.setItem('stringifiedCards', stringifiedArr);
    console.log(localStorage);
  }

  deleteFromStorage() {

  }

  updateToDo(obj){
    this.urgent = !this.urgent;
  }

  };
