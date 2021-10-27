import Component from "./BaseComponent.js";

const OPTIONS = Object.freeze({ TODAY: 0, WEEK: 1, MONTH: 2, YEAR: 3 });
const MAP_OPTIONS_TEXT = Object.freeze({
  TODAY: "오늘",
  WEEK: "이번 주",
  MONTH: "이번 달",
  YEAR: "올해",
});

class Dropdown extends Component {
  initState() {
    this.$state = {
      checked: OPTIONS.WEEK,
    };
  }
  initStyle() {
    this.style.position = "absolute";
    this.style.top = "32px";
    this.style.right = "0";
  }
  show() {
    this.style.display = "block";
  }
  hide() {
    this.style.display = "none";
  }
  template() {
    const { checked } = this.$state;
    return `<ul class="nav__time-toggle__dropdown">
        <li selected="${checked === OPTIONS.TODAY}" data-label="TODAY">오늘</li>
        <li selected="${
          checked === OPTIONS.WEEK
        }" data-label="WEEK">이번 주</li>
        <li selected="${
          checked === OPTIONS.MONTH
        }" data-label="MONTH">이번 달</li>
        <li selected="${checked === OPTIONS.YEAR}" data-label="YEAR">올해</li>
      </ul>`;
  }
  setEvent() {
    this.addEventListener("click", (e) => {
      e.preventDefault();
      const selectedLi = e.target.closest("li");
      if (selectedLi) {
        const selectedLabel = selectedLi.getAttribute("data-label");
        this.setState({ checked: OPTIONS[selectedLabel] });
        this.parentNode.querySelector("span").textContent =
          MAP_OPTIONS_TEXT[selectedLabel];
      }
    });
  }
}

customElements.define("drop-down", Dropdown);
