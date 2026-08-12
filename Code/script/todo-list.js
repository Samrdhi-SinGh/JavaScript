let todoList = [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';
  for (let i = 0; i < todoList.length; i++) {
    let todoObject = todoList[i];
    let { names, duedate } = todoObject;
    const html = `<div>${names}</div>  
    <div>${duedate}</div>g
    <button onclick="
    todoList.splice(${i},1);
    renderTodoList();
    ">Delete</button>
    `
    todoListHTML += html;
  }
  document.querySelector('.js-todoListHTML').innerHTML = todoListHTML;
}

function addButton() {
  const inputElement = document.querySelector('.js-input-box');
  let names = inputElement.value;

  const dateInputElement = document.querySelector('.js-date');
  let duedate = dateInputElement.value;

  todoList.push({names, duedate});
  console.log(todoList);

  inputElement.value = '';
  dateInputElement.value='';
  renderTodoList();
}