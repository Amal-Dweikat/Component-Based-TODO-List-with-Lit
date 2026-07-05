# Component-Based Todo List (Lit)

## Component Architecture

The application is built using 4 main components:

todo-app (main container)
│
├── todo-input   → handles adding new todos
├── todo-list    → displays list of todos
│       └── todo-item → represents a single todo item

---

## Component Responsibilities

### todo-app
- Main state manager of the application
- Stores todos array
- Handles:
  - add-todo
  - delete-todo
  - toggle-todo
- Passes data to child components

---

### todo-input
- Responsible for user input
- Contains input field and button
- Emits `add-todo` event to parent component

---

### todo-list
- Receives todos from todo-app
- Renders multiple todo-item components
- Forwards events (delete, toggle) to todo-app

---

### todo-item
- Displays a single todo item
- Contains checkbox and delete button
- Emits:
  - `toggle-todo`
  - `delete-todo`

---

## CBSE Principles Demonstrated

### 1. Modularity
The system is divided into independent components (input, list, item, app).

---

### 2. Reusability
Components like todo-item can be reused in other applications (notes, shopping list, etc.).

---

### 3. Encapsulation
Each component hides its internal implementation and exposes only:
- properties
- events

---

### 4. Composition
The application is built by composing smaller components:
todo-app → todo-input + todo-list → todo-item

---

### 5. Separation of Concerns
Each component has a single responsibility:
- todo-input → input handling
- todo-list → rendering list
- todo-item → single item UI
- todo-app → state management

---

## How the Application Works

1. User adds a todo in todo-input
2. todo-input emits add-todo event
3. todo-app updates state
4. todo-list re-renders items
5. todo-item handles user interactions (toggle/delete)
