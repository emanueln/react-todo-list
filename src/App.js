import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import Header from './components/layout/Header'
import './App.css';
import uuid from 'uuid'

class App extends Component {
  
  // Delete Todo
  delTodo = (id) => {
    this.setState( { todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }
  
  // Add Todo
  addTodo = (title) => {
    const newTodo = {
      title,
      id: uuid.v4(),
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo]})
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
        id : uuid.v4(),
        completed: false
      },
      {
        title: "Buy groceries",
        id : uuid.v4(),
        completed: false
      },
      {
        title: "Clean up after Charlie",
        id : uuid.v4(),
        completed: false
      }
    ]
  }
  render() {
    return (
      <div className="App">
        <div className="container">
          <Header />
          <AddTodo addTodo={this.addTodo}/>
          <Todos todos={this.state.todos} delTodo={this.delTodo} markComplete={this.markComplete}/>
        </div> 
      </div>
    );
  }
}

export default App;
