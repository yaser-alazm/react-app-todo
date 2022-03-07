import {useState, useEffect} from 'react'
import './App.css';
import Loader from './components/Loader'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [error, setError] = useState({})

  interface Todo {
    title: string;
    id: number;
    completed: boolean;
  }

  const handleCompleted = (index: number) => {
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)
  }

  const handleDelete =(index: number) => {
    const newTodos = [...todos]
    newTodos.splice(index,1)
    setTodos(newTodos)
  }

  const handleOnSubmit = (value: string) => {
    setTodos([...todos, {title: value, id: todos.length +1, completed: false }])
  }

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json())
    .then(res => setTodos(res.slice(0,10)))
    .catch(err => setError(err))
  }, [])
  return (
    <div className="App">
      {todos.length > 0 ? todos.map((todo:Todo, index: number) => <Todo todo={todo} index={index} handleCompleted={handleCompleted} handleDelete={handleDelete}/>) : (<Loader/>)}
      <TodoForm handleOnSubmit={handleOnSubmit} />
    </div>
  );
}

export default App;
