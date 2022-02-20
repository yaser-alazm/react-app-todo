import React from 'react'
import {TodoType} from '../types/Todo.types'

interface Props {
    todo: TodoType;
    prop1:boolean;
    prop2: boolean;
}


const Todo:React.FC<Props> = ({todo, prop1, prop2}) => {
    return (<>Todo ..</>)
}

export default Todo