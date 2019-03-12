import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header'
import './App.css';

class App extends Component {
  
  // Delete Todo
  delTodo = (id) => {
    this.setState( { todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }

  // Mark Todo Completed
  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  state = {
    todos: [
      {
        title: "Take out the trash",
        id : 1,
        completed: false
      },
      {
        title: "Buy groceries",
        id : 2,
        completed: false
      },
      {
        title: "Clean up after Charlie",
        id : 3,
        completed: false
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <Todos todos={this.state.todos} delTodo={this.delTodo} markComplete={this.markComplete}/>
      </div>
    );
  }
}

export default App;
