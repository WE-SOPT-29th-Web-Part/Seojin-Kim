import Component from "./BaseComponent.js";

class TodoWrapper extends Component {
  initState() {
    this.$state = {
      todoItems: [],
      title: this.getAttribute("data-title"),
    };
  }
  initStyle() {
    this.style.boxSizing = "border-box";
    this.style.display = "flex";
    this.style.transition = "all .2s";
  }
  deleteTodo(targetItem) {
    const { todoItems } = this.$state;
    this.setState({
      todoItems: todoItems.filter((item) => item !== targetItem),
    });
    console.log(this.$state);
  }
  addTodo(newTodo) {
    this.setState({ todoItems: [...this.$state.todoItems, newTodo] });
  }
  show() {
    this.style.width = "100%";
  }
  hide() {
    this.style.width = "0";
  }
  setEvent() {
    this.addEventListener("click", (e) => {
      const targetButton = e.target.closest("button");
      if (targetButton) {
        if (targetButton.textContent === "+") {
          const newTodo = this.querySelector("input").value;
          this.addTodo(newTodo);
        } else {
          const targetTodo =
            targetButton.parentNode.querySelector("div").textContent;
          this.deleteTodo(targetTodo);
        }
      }
    });
  }
  template() {
    return `
    <section class="border-right-black padding-20 bg-gray flex-column height-80">
        <h2 class="font-bold font-24 align-center">${this.$state.title}</h2>
        <ul class="flex-1">
            ${this.$state.todoItems.reduce((acc, item) => {
              return acc + `<to-do-item data=${item}>${item}</to-do-item>`;
            }, "")}
        </ul>
        <input type="text" class="padding-10 font-20">
        <div class="align-center padding-top-10">
            <button class="button round-20 bg-black font-white font-12">+</button>
        </div>
    </section>
    `;
  }
}

customElements.define("to-do-wrapper", TodoWrapper);
