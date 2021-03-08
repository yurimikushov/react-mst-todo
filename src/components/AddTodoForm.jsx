import React from 'react'
import PropTypes from 'prop-types'

const AddTodoForm = ({ addTodo }) => {
  const addTodoHandler = (e) => {
    e.preventDefault()
    addTodo()
  }

  return (
    <form className='add-todo-form'>
      <button
        className='add-todo-form__add-btn btn btn-primary'
        type='submit'
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
