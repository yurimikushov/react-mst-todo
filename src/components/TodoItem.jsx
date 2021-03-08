import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react-lite'

const TodoItem = ({ todo }) => (
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
  </li>
)

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
}

export default observer(TodoItem)
