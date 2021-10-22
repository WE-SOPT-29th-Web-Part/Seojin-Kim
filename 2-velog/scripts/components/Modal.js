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
    this.style.flexDirection = "column";
  }
  show(element) {
    this.setState({ contentHTML: element.innerHTML });
    this.style.display = "flex";
  }
  hide() {
    this.setState({ contentHTML: null });
    this.style.display = "none";
    document.body.style.overflow = "scroll";
  }
  template() {
    const { contentHTML } = this.$state;
    return `<div class="modalwrapper">
        ${contentHTML}
    </div>
    <button class="btn-card-modal" onclick="this.parentNode.hide()">X</button>`;
  }
}

customElements.define("card-modal", Modal);
