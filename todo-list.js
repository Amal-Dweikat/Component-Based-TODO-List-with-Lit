import { LitElement, html } from 'lit';
import './todo-item.js';

export class TodoList extends LitElement {

  static properties = {
    todos: { type: Array }
  };

  constructor() {
    super();
    this.todos = [];
  }

  render() {
    return html`
      ${this.todos.map(todo => html`
        <todo-item
          .text=${todo.text}
          .completed=${todo.completed}
          @delete-todo=${() => this.dispatchEvent(new CustomEvent('delete-todo', {
            detail: todo.id,
            bubbles: true,
            composed: true
          }))}
          @toggle-todo=${() => this.dispatchEvent(new CustomEvent('toggle-todo', {
            detail: todo.id,
            bubbles: true,
            composed: true
          }))}
        ></todo-item>
      `)}
    `;
  }
}

customElements.define('todo-list', TodoList);
