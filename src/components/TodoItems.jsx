import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const TodoItems = ({ todos, deleteTodo }) => (
  <ul className='todo-items list-group my-2'>
    {todos.length > 0 ? (
      todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          deleteTodo={() => deleteTodo(todo.id)}
        />
      ))
    ) : (
      <div className='dont-have-todos-alert alert alert-light'>
        You don&apos;t have any todo
      </div>
    )}
  </ul>
)

TodoItems.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
      toggle: PropTypes.func.isRequired,
      setName: PropTypes.func.isRequired,
    })
  ).isRequired,
  deleteTodo: PropTypes.func.isRequired,
}

export default TodoItems
