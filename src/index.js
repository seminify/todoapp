import { log } from './utils';
import { printTodos } from './print-todos';
import { init as initForm } from './form';
import './todos.css';
import { get as getStorage } from './storage';
const todos = getStorage() || [];
const deleteTodo = (index) => {
  console.log('delete', index);
  todos.splice(index, 1);
  print();
};
const print = () => {
  printTodos(todos);
};
const toggleTodo = (index) => {
  console.log('toggle');
  todos[index].isDone = !todos[index].isDone;
  print();
};
document.body.addEventListener('click', (event) => {
  const index = parseInt(event.target.parentNode.dataset.index, 10);
  if (event.target.className === 'delete') {
    deleteTodo(index);
  } else if (event.target.className === 'toggle-checked') {
    toggleTodo(index);
  }
});
initForm(todos);
print();