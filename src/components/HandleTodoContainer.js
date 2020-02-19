import React, { useState } from 'react'
import _ from 'lodash'
import HandleTodoComponent from './HandleTodoComponent'
import { Todo } from '../models/Todo'

const HandleTodoContainer = () => {
  const [text, setText] = useState('')
  const [todos, setTodos] = useState([new Todo(0, 'useState')])

  const handleTextChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (_.isEmpty(text)) return
    let newTodos = [...todos, new Todo(Date.now(), text)]
    setTodos(newTodos)
    setText('')
  }

  const removeTodo = (todoId) => {
    let todoToKeep = todos.filter((todo) => todo.id !== todoId)
    setTodos(todoToKeep)
  }

  return (
    <HandleTodoComponent text={text}
                         todos={todos}
                         handleSubmit={handleSubmit}
                         handleTextChange={handleTextChange}
                         removeTodo={removeTodo} />
  )
}

export default HandleTodoContainer