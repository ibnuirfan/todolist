import React from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="todo-app">
        <h1>To-do OR Not-to-do</h1>
        <TodoList />
    </div>
  );
}

export default App;
