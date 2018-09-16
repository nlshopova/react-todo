import React, { Component } from "react";
import "./../styles/todoListItem.css";

class TodoListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
    this.toggleChecked = this.toggleChecked.bind(this);
  }
  toggleChecked() {
    if (this.state.checked == false) {
      this.setState({ checked: true });
    } else {
      this.setState({ checked: false });
    }
  }
  removeTodo(id) {
    this.props.removeTodo(id);
  }

  render() {
    let checkedClass = this.state.checked ? "checked" : " ";
    return (
      <li className="list-group-item">
        <input type="checkbox" onClick={() => this.toggleChecked()} />
        <span className="badge">
          <button
            className="remove-todo"
            onClick={e => this.removeTodo(this.props.id)}
          >
            <span className="glyphicon glyphicon-remove" aria-hidden="true" />
          </button>
        </span>
        <span className={checkedClass}>{this.props.todo.text}</span>
      </li>
    );
  }
}

export default TodoListItem;
