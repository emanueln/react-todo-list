import React, { Component } from 'react';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
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
        <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
