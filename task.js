class Task {
  constructor(obj) {
    this.text = obj.text;
    this.checked = false;
    this.id = obj.id;
  }

  updateCheck() {
    this.checked = !this.checked;
  }
};
