import React, { Component } from 'react';
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
        todos.push({id: this.state.nextId, text: todoText});
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
            <div className="App">
                <TodoItemInput todoText="" addTodo={this.addTodo}/>
                <h2>To Do List</h2>
                <ul>
                    {this.state.todos.length == 0 ?
                        (<li>nothing</li>) : (
                            this.state.todos.sort((a, b) => a.id < b.id)
                            .map((todo) => {
                                return <TodoListItem todo={todo} key={todo.id} id={todo.id} removeTodo={this.removeTodo} />
                    })
                        )}
                </ul>
            </div>
        );
    }
}

export default Home;
