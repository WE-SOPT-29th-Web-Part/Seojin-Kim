const $ = (selector) => document.querySelector(selector);
const dropdownElement = $("drop-down"),
  dropdownButton = $(".nav__time-toggle");
const cardItemsSection = $(".card-items"),
  cardModal = $("card-modal");

document.addEventListener("click", () => {
  dropdownElement.hide();
  cardModal.hide();
});

dropdownButton.addEventListener("click", (e) => {
  e.stopPropagation();
  dropdownElement.show();
});

cardItemsSection.addEventListener("click", (e) => {
  e.stopPropagation();
  const selectedCard = e.target.closest(".card-item");
  if (selectedCard) {
    cardModal.show(selectedCard);
  }
});
