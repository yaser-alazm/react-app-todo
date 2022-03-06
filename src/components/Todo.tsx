import React from 'react'
import {TodoType} from '../types/Todo.types'

interface Props {
    todo: TodoType;
    index: number;
    handleCompleted: (id: number) => void;
    handleDelete: (id: number) => void;
}

const todoStyle ={

}


const Todo:React.FC<Props> = ({todo, index, handleCompleted, handleDelete}) => {
    return (
    <div className="todo" style={{textDecoration: todo.completed ?  'line-through' : ''}}>
        {todo.title}
        <div>
            <button onClick={() => handleCompleted(index)}>{todo.completed ? 'Incomplete': 'Complete'}</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
        </div>
    </div>)
}

export default Todo