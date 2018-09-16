import React, { Component } from "react";
import TodoListItem from "./TodoListItem";

class TodoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="todo-list-container">
        <div className="todo-list">
          {this.props.todos.length == 0 ? (
            <div>nothing</div>
          ) : (
            <ul className="list-group">
              {this.props.todos.sort((a, b) => a.id < b.id).map(todo => {
                return (
                  <TodoListItem
                    todo={todo}
                    key={todo.id}
                    id={todo.id}
                    removeTodo={this.props.removeTodo}
                  />
                );
              })}
            </ul>
          )}
        </div>
      </div>
    );
  }
}

export default TodoList;
