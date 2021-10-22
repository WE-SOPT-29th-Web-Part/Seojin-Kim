const $ = (selector) => document.querySelector(selector);
const dropdownElement = $("drop-down"),
  dropdownButton = $(".nav__time-toggle");

document.addEventListener("click", () => {
  dropdownElement.hide();
});

dropdownButton.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdownElement.show();
});
