export default class Component extends HTMLElement {
  $state;
  constructor() {
    super();
    this.initState();
    this.render();
    this.initStyle();
    this.setEvent();
  }
  template() {
    return "";
  }
  render() {
    this.innerHTML = this.template();
  }
  initState() {}
  setEvent() {}
  setState(newState) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }
  initStyle() {}
}
