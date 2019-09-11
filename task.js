class Task {
  constructor(obj) {
    this.text = obj.text;
    this.checked = false;
    this.id = obj.id;
  }

  updateCheck() {
    // console.log(9);
    this.checked = !this.checked;
  }

};
