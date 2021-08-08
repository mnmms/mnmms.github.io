import "./styles.css";

const todosForm = document.querySelector("form#todos-form");
const todoInput = document.querySelector("form#todos-form input");
const todosList = document.querySelector("form#todos-form ul");

const TODOS_KEY = "todos";
const getTodos = localStorage.getItem(TODOS_KEY);

let todosArr = [];

const deleteTodo = (e) => {
  const li = e.target.parentElement;
  li.remove();
  todosArr = todosArr.filter((item) => parseInt(li.id) !== item.id);
  console.log(todosArr);
  saveTodo(e);
};

const printTodo = (newTodoObj) => {
  const li = document.createElement("li");
  const span = document.createElement("span");
  const button = document.createElement("button");

  li.id = newTodoObj.id;
  span.innerText = newTodoObj.text;
  button.innerText = "❌";
  button.addEventListener("click", deleteTodo);
  li.appendChild(span);
  li.appendChild(button);
  todosList.appendChild(li);
  saveTodo();
};

const saveTodo = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todosArr));
};

const handleSubmit = (e) => {
  e.preventDefault();
  const newTodoObj = {
    id: Date.now(),
    text: todoInput.value
  };
  todosArr.push(newTodoObj);
  todoInput.value = "";
  printTodo(newTodoObj);
  saveTodo();
};

todosForm.addEventListener("submit", handleSubmit);

// 만약 localStorage.getItem으로 todos를 가져올 수 있다면(존재한다면),
// 브라우저에 Todo List를 보여준다.
if (getTodos) {
  const parsedTodos = JSON.parse(getTodos);
  todosArr = parsedTodos; // array를 let으로 만들어야 가능, 브라우저 새로고침 시 빈 배열로 선언했기 때문에 초기화되는데 해당 값을 넣어주면 새로고침 후에도 데이터 유지
  parsedTodos.forEach(printTodo); // 배열의 요소들을 printTodo에 넘겨줌(+ 함수 실행), parsedTodos의 요소마다 함수가 실행
}
