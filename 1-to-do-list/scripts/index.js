const $ = (selector) => document.querySelector(selector);

const buttonToday = $(".button-today"),
  buttonTomorrow = $(".button-tomorrow"),
  buttonBoth = $(".button-both");

const todoToday = $(".todo-today"),
  todoTomorrow = $(".todo-tomorrow");

const showToday = () => {
  todoToday.show();
  todoTomorrow.hide();
};

const showTomorrow = () => {
  todoTomorrow.show();
  todoToday.hide();
};

const showBoth = () => {
  todoToday.show();
  todoTomorrow.show();
};

buttonToday.addEventListener("click", showToday);
buttonTomorrow.addEventListener("click", showTomorrow);
buttonBoth.addEventListener("click", showBoth);
