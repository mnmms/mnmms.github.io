import "./styles.css";

const loginForm = document.querySelector("#login-form");
const inputLoginForm = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// string만 포함된 변수는 대문자로 표기, string을 저장하고 싶을 때 사용
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const paintGreeting = () => {
  const saveUserName = localStorage.getItem(USERNAME_KEY);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello, ${saveUserName}`;
};

const onLoginSubmit = (e) => {
  const username = inputLoginForm.value;
  e.preventDefault();
  greeting.classList.add(HIDDEN_CLASSNAME);

  if (localStorage.getItem(USERNAME_KEY)) {
    paintGreeting();
  } else {
    localStorage.setItem(USERNAME_KEY, username);
    paintGreeting();
  }
};

loginForm.addEventListener("submit", onLoginSubmit);
