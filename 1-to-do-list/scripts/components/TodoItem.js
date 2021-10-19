import Component from "./BaseComponent.js";

class TodoItem extends Component {
  initStyle() {
    this.style.boxSizing = "border-box";
  }
  template() {
    return `
        <li class="flex-row border-bottom-black padding-vertical-10">
            <div class="font-20">${this.textContent}</div>
            <button class="button round-20 bg-black font-white font-12">X</button>
        </li>`;
  }
}

customElements.define("to-do-item", TodoItem);
