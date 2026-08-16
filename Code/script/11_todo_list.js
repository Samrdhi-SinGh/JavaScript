const todoList = [];


function renderTodoList() {
  let todoListHTML = '';

  // for (let i = 0; i < todoList.length; i++) {
  //   const todoObject = todoList[i];
  //   let {name, duedate} = todoObject;
  todoList.forEach((todoObject, index) => {
    let {name, duedate} = todoObject;
    const html = `<div>${name}</div>
    <div>${duedate}</div>
    <button onclick="
    todoList.splice(${index}, 1);
    renderTodoList();
    " class="js-delete-button">Delete</button>
    `
    todoListHTML += html;
  });

  document.querySelector('.todo-lists').innerHTML = todoListHTML;
}

function addButton() {
  const inputElement = document.querySelector('.todo-inbox');
  let name = inputElement.value;

  const dateInputElement = document.querySelector('.date-inbox');
  let duedate = dateInputElement.value;

  todoList.push({name, duedate});
  console.log(todoList);

  inputElement.value = '';
  dateInputElement.value = '';

  renderTodoList();
}

function handleKeydown(event) {
  console.log(event);

  if (event.key === 'Enter') {
    addButton();
  }
}

