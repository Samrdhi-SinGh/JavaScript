const todoList = ['make dinner', 'wash clothes'];//Global variable

for(let i = 1; i < todoList.length; i++){
  const todo = todoList[i];
  const html = `
  <p>${todo}</p>`;
  todoListHTML +=html;
}
console.log(todoListHTML);

document.querySelector('.js-todo-list')
.innerHTML = todoListHTML;

function addtodoList(){
  const inputElement = document.querySelector('.js-todo-name');
  let name = inputElement.value;
  todo.push(name);
  console.log(todoList); 

  inputElement.value = '';//This will replace the value to empty after adding to todo array.
}


 