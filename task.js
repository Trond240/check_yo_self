class Task {
  constructor(obj) {
    this.text = obj.text;
    this.checked = false;
    this.id = obj.id;
  }

  updateCheck() {
    console.log('Kayla smells')
    this.checked = !this.checked;
  }

};
