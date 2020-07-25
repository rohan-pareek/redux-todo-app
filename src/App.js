import React from 'react';
import './App.css';
import Todos from './components/Todos';

function App() {
  return (
    <div className = "todo-main">
      <div className = "todo-intro">
        <h1>Todo App</h1>
        <p>A simple todo app build using react and redux</p>
      </div>
      <Todos />
    </div>
  );
}

export default App;
