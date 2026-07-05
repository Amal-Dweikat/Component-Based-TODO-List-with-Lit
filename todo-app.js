import { LitElement, html } from 'lit';
import './todo-input.js';
import './todo-list.js';

export class TodoApp extends LitElement {

  static properties = {
    todos: { type: Array }
  };

  constructor() {
    super();
    this.todos = [];
    this.nextId = 1;
  }

  addTodo(e) {
    this.todos = [
      ...this.todos,
      { id: this.nextId++, text: e.detail, completed: false }
    ];
  }

  deleteTodo(e) {
    this.todos = this.todos.filter(t => t.id !== e.detail);
  }

  toggleTodo(e) {
    this.todos = this.todos.map(t =>
      t.id === e.detail ? { ...t, completed: !t.completed } : t
    );
  }

  render() {
    return html`
      <h2>Todo App</h2>

      <todo-input @add-todo=${this.addTodo}></todo-input>

      <todo-list
        .todos=${this.todos}
        @delete-todo=${this.deleteTodo}
        @toggle-todo=${this.toggleTodo}
      ></todo-list>
    `;
  }
}

customElements.define('todo-app', TodoApp);
