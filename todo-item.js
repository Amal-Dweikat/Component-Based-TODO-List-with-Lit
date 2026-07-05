import { LitElement, html } from 'lit';

export class TodoItem extends LitElement {

  static properties = {
    text: { type: String },
    completed: { type: Boolean }
  };

  constructor() {
    super();
    this.text = '';
    this.completed = false;
  }

  toggle() {
    this.dispatchEvent(new CustomEvent('toggle-todo', {
      bubbles: true,
      composed: true
    }));
  }

  delete() {
    this.dispatchEvent(new CustomEvent('delete-todo', {
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <div>
        <input type="checkbox" .checked=${this.completed} @change=${this.toggle}>
        <span style=${this.completed ? "text-decoration:line-through" : ""}>
          ${this.text}
        </span>
        <button @click=${this.delete}>Delete</button>
      </div>
    `;
  }
}

customElements.define('todo-item', TodoItem);
