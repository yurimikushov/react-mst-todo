import React from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '../store'
import TodoItem from './TodoItem'
import Loader from './Loader'

const TodoItems = () => {
  const { isPending, todos, deleteTodo } = useStore()

  if (isPending) {
    return (
      <Loader
        className='m-2 d-flex justify-content-center align-items-center text-secondary'
        style={{ height: '300px' }}
      />
    )
  }

  return (
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
}

export default observer(TodoItems)
