import React, { useState } from 'react';
import './styles.css'; // Import your CSS file for styling

function App() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };

    setList([...list, newTodo]);
    setInput('');
  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

  return (
    <div className="container">
      <h1>Todo List</h1>
      <div className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => addTodo(input)}>Add</button>
      </div>
      <ul>
        {list.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            <button className="delete-btn" onClick={() => deleteTodo(todo.id)}>
              &times;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
