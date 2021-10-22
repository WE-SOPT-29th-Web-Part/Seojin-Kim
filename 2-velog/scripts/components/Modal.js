import Component from "./BaseComponent.js";

class Modal extends Component {
  initState() {
    this.$state = { contentHTML: null };
  }
  initStyle() {
    this.style.position = "fixed";
    this.style.width = "100%";
    this.style.height = "100vh";
    this.style.background = "rgb(0, 0, 0, 0.2)";
    this.style.display = "none";
    this.style.alignItems = "center";
    this.style.justifyContent = "center";
  }
  show(element) {
    this.setState({ contentHTML: element.innerHTML });
    this.style.display = "flex";
  }
  hide() {
    this.setState({ contentHTML: null });
    this.style.display = "none";
  }
  template() {
    const { contentHTML } = this.$state;
    return contentHTML ? `<div class="modalwrapper">${contentHTML}</div>` : "";
  }
}

customElements.define("card-modal", Modal);
