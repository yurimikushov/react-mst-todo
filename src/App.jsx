import React from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from './store'
import AddTodoForm from './components/AddTodoForm'
import TodoItems from './components/TodoItems'
import TodoCounter from './components/TodoCounter'

const App = () => {
  const {
    todos,
    addTodo,
    deleteTodo,
    pendingTodosCount,
    completedTodosCount,
  } = useStore()

  return (
    <div className='container my-3'>
      <AddTodoForm addTodo={addTodo} />
      <TodoItems todos={todos} deleteTodo={deleteTodo} />
      <TodoCounter
        pendingCount={pendingTodosCount}
        completedCount={completedTodosCount}
      />
    </div>
  )
}

export default observer(App)
