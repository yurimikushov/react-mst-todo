import React, { useState } from 'react'
import PropTypes from 'prop-types'

const AddTodoForm = ({ addTodo }) => {
  const [todoTitle, setTodoTitle] = useState('')

  const addTodoHandler = (e) => {
    e.preventDefault()

    if (!todoTitle) {
      return
    }

    addTodo(todoTitle)
  }

  return (
    <form className='add-todo-form d-flex'>
      <input
        className='add-todo-form__input form-control mr-2'
        placeholder='Type a todo'
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      <button
        className='add-todo-form__add-btn btn btn-primary'
        type='submit'
        style={{ minWidth: '100px' }}
        onClick={addTodoHandler}
      >
        Add todo
      </button>
    </form>
  )
}

AddTodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired,
}

export default AddTodoForm
