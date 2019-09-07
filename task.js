class Task {
  constructor(obj) {
    this.text = obj.text;
    this.checked = false;
  }
  sayHi() {
    console.log('Hi:',this)
  }
}
