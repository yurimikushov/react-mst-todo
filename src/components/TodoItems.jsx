import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const TodoItems = ({ todos, deleteTodo }) => (
  <ul className='todo-items list-group my-2'>
    {todos.map((todo) => (
      <TodoItem
        key={todo.id}
        todo={todo}
        deleteTodo={() => deleteTodo(todo.id)}
      />
    ))}
  </ul>
)

TodoItems.propTypes = {
  todos: PropTypes.array.isRequired,
  deleteTodo: PropTypes.func.isRequired,
}

export default TodoItems
