import { printTodos } from './print-todos';
const $form = document.querySelector('.new-task');
const $input = document.querySelector('.new-task > input');
function init(todos) {
  const checkTodo = (event) => {
    event.preventDefault();
    console.log($input.value);
    const todo = { title: $input.value, isDone: false };
    todos.push(todo);
    console.log(todos);
    $input.value = '';
    printTodos(todos);
  };
  $form.addEventListener('submit', checkTodo);
}
export { init };