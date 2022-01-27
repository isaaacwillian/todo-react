let items = JSON.parse(localStorage.getItem("savedItems"));
let lastId = 0;

if (items) {
  if (items.length !== 0) {
    lastId = ++items.slice(-1)[0].id;
  }
}

function Item(text) {
  this.id = lastId++;
  this.text = text;
  this.done = false;
}

export default Item;
