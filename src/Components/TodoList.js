import React from "react";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      todoText: ""
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.todoText.trim() === "") {
      return;
    }
    const newTodos = [...this.state.todos];
    newTodos.push(this.state.todoText.trim());
    this.setState({
      todos: newTodos,
      todoText: ""
    });
  };

  handleChange = (event) => {
    this.setState({
      todoText: event.target.value
    });
  };

  handleDelete = (index) => {
    const newTodos = [...this.state.todos];
    newTodos.splice(index, 1);
    this.setState({
      todos: newTodos
    });
  };

  render() {
    return (
      <div>
        <h2>Add Task</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            value={this.state.todoText}
            onChange={this.handleChange}
            name="todoText"
            type="text"
            placeholder="Wash the car"
            required
          />
          <button>Add</button>
        </form>
        <h2>My Tasks</h2>
        <div className="todos-list">
          {this.state.todos.map((todo, index) => {
            return (
              <div className="todo" key={index}>
                <span>{todo}</span>
                <button onClick={() => this.handleDelete(index)}>Delete</button>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default TodoList;
