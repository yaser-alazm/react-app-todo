import React from 'react'

interface Props {
    handleOnSubmit: (value: string) => void
}

const TodoForm:React.FC<Props> = ({handleOnSubmit}) => {
    const [inputValue,setinputValue] = React.useState('')

    return (<form onSubmit={(e) => {
        e.preventDefault()
        handleOnSubmit(inputValue)
        setinputValue('')
    }}>
        <input
            type='text'
            className='todo'
            value={inputValue}
            onChange={(e) => setinputValue(e.target.value)}
        />
    </form>)

}

export default TodoForm