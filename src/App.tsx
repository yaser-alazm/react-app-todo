import {useState, useEffect} from 'react'
import './App.css';
import Loader from './components/Loader'

function App() {
  const [todos, setTodos] = useState([])
  const [error, setError] = useState({})

  interface Todo {
    title: string;
    id: number;
    completed: boolean;
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(res => setTodos(res.slice(0,10)))
    .catch(err => setError(err))
  }, [])
  return (
    <div className="App">
      {todos.length > 0 ? todos.map((todo:Todo) => console.log(todo.title)) : (<Loader/>)}
    </div>
  );
}

export default App;
