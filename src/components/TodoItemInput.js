import React, { Component } from 'react';
import './../styles/todoItemInput.css'


class TodoItemInput extends Component {

  constructor(props) {
    super(props);

    this.state = { value: this.props.todoText };

    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }


  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  addTodo(todo) {
    // Ensure a todo was actually entered before submitting
    if (todo.length > 0) {
      this.props.addTodo(todo);
      this.setState({ value: '' });
    }
  }
  render() {
    return (
      <div className="todo-input input-group">
        <input type="text" value={this.state.value} onChange={this.handleChange} className="form-control" />
        <span className="input-group-btn"><button onClick={() => this.addTodo(this.state.value)} className="input-group-btn"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span></button>
        </span>
      </div>
    );
  }
}

export default TodoItemInput;
