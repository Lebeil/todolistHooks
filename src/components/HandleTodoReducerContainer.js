import React, { useReducer } from 'react'
import _ from 'lodash'
import HandleTodoComponent from './HandleTodoComponent'
import { Todo } from '../models/Todo'
import produce from 'immer'

const SET_TEXT = 'SET_TEXT'
const ADD_TODO = 'ADD_TODO'
const SET_TODOS = 'SET_TODOS'

const reducer = produce((draft, action) => {
  switch (action.type) {
    case SET_TEXT:
      draft.text = action.payload
      break
    case ADD_TODO:
      draft.todos.push(action.payload)
      break
    case SET_TODOS:
      draft.todos = action.payload
      break
    default:
      break
  }
  return draft
})

const HandleTodoReducerContainer = () => {
  const initialState = {
    text: '',
    todos: [new Todo(0, 'useReducer')]
  }
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleTextChange = (e) => {
    dispatch({type: SET_TEXT, payload: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (_.isEmpty(text)) return
    dispatch({type: ADD_TODO, payload: new Todo(Date.now(), text)})
    dispatch({type: SET_TEXT, payload: ''})
  }

  const removeTodo = (todoId) => {
    let todoToKeep = todos.filter((todo) => todo.id !== todoId)
    dispatch({type: SET_TODOS, payload: todoToKeep})
  }

  const {text, todos} = state

  return (
    <HandleTodoComponent text={text}
                         todos={todos}
                         handleSubmit={handleSubmit}
                         handleTextChange={handleTextChange}
                         removeTodo={removeTodo} />
  )
}

export default HandleTodoReducerContainer