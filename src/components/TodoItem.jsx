import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react-lite'

const TodoItem = ({ todo, deleteTodo }) => {
  const [todoEditable, setTodoEditable] = useState(false)

  return (
    <li className='todo-item d-flex align-items-center shadow-sm rounded p-3 my-1'>
      <input
        className='todo-item__done'
        type='checkbox'
        checked={todo.done}
        onChange={() => todo.toggle()}
      />
      {todoEditable ? (
        <input
          className='todo-item__name form-control mx-3'
          type='text'
          value={todo.title}
          placeholder='Type a todo'
          onChange={(e) => todo.setTitle(e.target.value)}
          onBlur={() => setTodoEditable(false)}
          autoFocus={true}
        />
      ) : (
        <div
          className='todo-item__name w-100 mx-3'
          style={{ minHeight: '1rem', cursor: 'pointer' }}
          onClick={() => setTodoEditable(true)}
        >
          {todo.title}
        </div>
      )}
      <button
        className='todo-item__delete-btn btn close ml-auto'
        onClick={deleteTodo}
      >
        <span>&times;</span>
      </button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    setTitle: PropTypes.func.isRequired,
  }).isRequired,
  deleteTodo: PropTypes.func.isRequired,
}

export default observer(TodoItem)
