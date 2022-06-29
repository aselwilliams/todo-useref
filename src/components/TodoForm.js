import React,{useState} from 'react'

function TodoForm() {
    const [input, setInput]=useState('')

    const handleChange=(e)=>{
        setInput(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        props.onSubmit({
            id: nanoid(),
            text: input,
        })
        setInput('')
    }
  return (
    <form onSubmit={handleSubmit} className='todo-form'>
        <input type='text' placeholder='Add a todo' value={input} onChange={handleChange} />
        <button className='add'>Add todo</button>
    </form>
  )
}

export default TodoForm