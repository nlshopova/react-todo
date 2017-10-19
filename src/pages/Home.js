import React, { Component } from 'react';
import TodoList from './../components/TodoList'
import TodoListItem from './../components/TodoListItem'
import TodoItemInput from './../components/TodoItemInput'


class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            todos: [
                { id: 0, text: "Make dinner tonight!" },
                { id: 1, text: "Fold the laundry." },
                { id: 2, text: "Learn to make a React app!" }
            ],
            nextId: 3
        };

        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }
    addTodo(todoText) {
        let todos = this.state.todos.slice();
        todos.push({ id: this.state.nextId, text: todoText });
        this.setState({
            todos: todos,
            nextId: ++this.state.nextId
        });
    }
    removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter((todo, index) => todo.id !== id)
        });
    }
    render() {
        return (
            <div>
                <h3>To Do List</h3>
                    <TodoItemInput todoText="" addTodo={this.addTodo} />
                    <TodoList todos={this.state.todos} removeTodo={this.removeTodo} />
            </div>
        );
    }
}

export default Home;
