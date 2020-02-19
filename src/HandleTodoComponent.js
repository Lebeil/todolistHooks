import React, { useState } from 'react'
import _ from 'lodash'

class Todo {
  constructor (id, text) {
    this.id = id
    this.text = text
  }
}

const HandleTodoComponent = () => {
  const [text, setText] = useState('')
  const [todos, setTodos] = useState([])

  const handleTextChange = (e) => {
    setText(e.target.value)
  }

  const handleNewTodo = (e) => {
    e.preventDefault()
    if (_.isEmpty(text)) return
    let newTodos = [...todos, new Todo(Date.now(), text)]
    setTodos(newTodos)
    e.target.reset()
  }

  const removeTodo = (todoId) => {
    let todoToKeep = todos.filter((todo) => todo.id !== todoId)
    setTodos(todoToKeep)
  }

  return (
    <div>
      <h1>Todolist</h1>
      <form onSubmit={handleNewTodo}>
        <input placeholder='Saisir une tâche'
               onChange={handleTextChange} />
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              {todo.text}
              <button onClick={() => removeTodo(todo.id)}>X</button>
            </li>
          ))}
        </ul>
      </form>
    </div>
  )
}

export default HandleTodoComponent
