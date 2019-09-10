class Task {
  constructor(obj) {
    this.text = obj.text;
    this.checked = false;
    this.id = obj.id;
  }

  updateCheck(obj) {
    this.checked = !this.checked;
  }

};
