import { LitElement, html } from 'lit';

export class TodoInput extends LitElement {

  constructor() {
    super();
    this.value = '';
  }

  updateValue(e) {
    this.value = e.target.value;
  }

  addTodo() {
    if (!this.value) return;

    this.dispatchEvent(new CustomEvent('add-todo', {
      detail: this.value,
      bubbles: true,
      composed: true
    }));

    this.value = '';
  }

  render() {
    return html`
      <input
        .value=${this.value}
        @input=${this.updateValue}
        placeholder="New todo"
      >
      <button @click=${this.addTodo}>Add</button>
    `;
  }
}

customElements.define('todo-input', TodoInput);
