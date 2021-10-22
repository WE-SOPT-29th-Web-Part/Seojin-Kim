import Component from "./BaseComponent.js";

class TagWrapper extends Component {
  initState() {
    this.$state = {
      tags: [],
    };
  }
  initStyle() {
    this.style.display = "flex";
    this.style.flexWrap = "wrap";
    this.style.gap = "12px";
    this.style.padding = "20px";
    const newTagInput = this.querySelector("input");
    newTagInput.style.padding = "12px 18px";
  }
  addTags() {
    const newTagInput = this.querySelector("input");
    const newTag = newTagInput.value;
    if (newTag) {
      this.setState({ tags: [...this.$state.tags, newTag] });
      newTagInput.value = "";
      window.setTimeout(() => {
        this.querySelector("input").focus();
      }, 10);
    }
  }
  template() {
    const { tags } = this.$state;
    return `${tags.reduce((acc, tag) => {
      return acc + `<tag-item>${tag}</tag-item>`;
    }, "")}
      <input placeholder="태그를 입력해주세요"></input>`;
  }
  setEvent() {
    this.addEventListener("keypress", (e) => {
      if (e.key === "Enter") this.addTags();
    });
  }
}

customElements.define("tag-wrapper", TagWrapper);
