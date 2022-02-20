import {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [todos, setTodos] = useState([])
  const [error, setError] = useState({})

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(res => setTodos(res.slice(0,10)))
    .catch(err => setError(err))
  }, [])
  return (
    <div className="App">
      Hello World!
    </div>
  );
}

export default App;
