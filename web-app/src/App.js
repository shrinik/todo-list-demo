import { useState } from 'react';
import './App.css';
import { getTodos } from './api'

function App() {

  const [todos, setTodos] = useState([])

  async function getTodoList() {
    let arrToDos = await getTodos()
    console.log(arrToDos)
    setTodos(arrToDos)
  }

  return (
    <div className="App">
        <h1>To Do List</h1>
        <ul>
        {todos.map(todo => <li>{todo}</li>)}
        </ul>
        <button onClick={getTodoList}>Get Todos</button>
    </div>
  );
}

export default App;
