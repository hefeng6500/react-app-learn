import React, { Component } from 'react';
import './App.css';



import TodoList from './todolist'
class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}

export default App;
