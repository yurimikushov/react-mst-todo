import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const TodoItems = ({ todos }) => (
  <ul className='todo-items list-group my-2'>
    {todos.map((todo, id) => (
      <TodoItem key={id} todo={todo} />
    ))}
  </ul>
)

TodoItems.propTypes = {
  todos: PropTypes.array.isRequired,
}

export default TodoItems
