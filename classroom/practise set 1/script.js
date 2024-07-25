// script.js
const newItemInput = document.getElementById('new-item');
const addBtn = document.getElementById('add-btn');
const toDoList = document.getElementById('to-do-list');

let toDoItems = [];

addBtn.addEventListener('click', () => {
  const newItem = newItemInput.value.trim();
  if (newItem) {
    toDoItems.push({ text: newItem, completed: false });
    renderList();
    newItemInput.value = '';
  }
});

function renderList() {
  toDoList.innerHTML = '';
  toDoItems.forEach((item, index) => {
    const li = document.createElement('li');
    li.textContent = item.text;
    if (item.completed) {
      li.classList.add('completed');
    }
    toDoList.appendChild(li);
  });
}