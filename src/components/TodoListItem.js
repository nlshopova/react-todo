import React, { Component } from 'react';
import './../styles/todoListItem.css'


class TodoListItem extends Component {

  constructor(props) {
    super(props);
  }

  removeTodo(id) {
    this.props.removeTodo(id);
  }

  render() {
    return (
      <li className="list-group-item">
        <span className="badge"><button className="remove-todo" onClick={(e)=> this.removeTodo(this.props.id) }><span class="glyphicon glyphicon-remove" aria-hidden="true"></span></button></span>
        <span>{this.props.todo.text}</span>
      </li>
    );
  }
}

export default TodoListItem;
