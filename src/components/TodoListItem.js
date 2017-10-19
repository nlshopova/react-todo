import React, { Component } from 'react';



class TodoListItem extends Component {

  constructor(props) {
    super(props);
  }

  removeTodo(id) {
    this.props.removeTodo(id);
  }

  render() {
    return (
      <div className="todo-wrap">
        <span>{this.props.todo.text}</span>
        <button className="remove-todo" onClick={(e)=> this.removeTodo(this.props.id) }>X</button>
      </div>
    );
  }
}

export default TodoListItem;
