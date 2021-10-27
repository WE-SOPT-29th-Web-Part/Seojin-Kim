import Component from "./BaseComponent.js";

class TagItem extends Component {
  initStyle() {
    this.style.backgroundColor = "#F2F7F7";
    this.style.padding = "12px 18px";
    this.style.borderRadius = "20px";
    this.style.color = "rgb(18, 184, 134)";
    this.style.cursor = "pointer";
  }
  template() {
    return `<div>${this.textContent}</div>`;
  }
}

customElements.define("tag-item", TagItem);
