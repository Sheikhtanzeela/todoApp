import React, { Component } from "react";
import Todos from "./Todos";
import AddTodo from "./AddTodo";

class App extends Component {
  state = {
    todos: [
      { id: 1, content: "Learn DS" },
      { id: 2, content: "Learn GATE" },
      { id: 3, content: "Learn MAth" },
      { id: 4, content: "Learn React" },
    ],
  };
  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos,
    });
  };

  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos,
    });
  };
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's List</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
