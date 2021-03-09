import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react-lite'

const TodoItem = ({ todo, deleteTodo }) => (
  <li className='todo-item d-flex align-items-center shadow-sm rounded p-3 my-1'>
    <input
      className='todo-item__done'
      type='checkbox'
      checked={todo.done}
      onChange={() => todo.toggle()}
    />
    <input
      className='todo-item__name form-control mx-3'
      type='text'
      value={todo.name}
      placeholder='Type a todo'
      onChange={(e) => todo.setName(e.target.value)}
    />
    <button
      className='todo-item__delete-btn btn close fs-1'
      onClick={deleteTodo}
    >
      <span>&times;</span>
    </button>
  </li>
)

TodoItem.propTypes = {
  todo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
    toggle: PropTypes.func.isRequired,
    setName: PropTypes.func.isRequired,
  }).isRequired,
  deleteTodo: PropTypes.func.isRequired,
}

export default observer(TodoItem)
