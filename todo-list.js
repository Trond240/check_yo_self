class ToDoList {
  constructor(obj) {
    this.id = obj.id;
    this.title = obj.title;
    this.tasks = obj.tasks;
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

  UpdateToDo() {

  }

  };
