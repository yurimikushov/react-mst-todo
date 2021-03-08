import React from 'react'
import { values } from 'mobx'
import { observer } from 'mobx-react-lite'
import { useStore } from './store'
import AddTodoForm from './components/AddTodoForm'
import TodoItems from './components/TodoItems'
import TodoCounter from './components/TodoCounter'

const App = () => {
  const { todos, addTodo, pendingCount, completedCount } = useStore()

  return (
    <>
      <AddTodoForm addTodo={addTodo} />
      <TodoItems todos={values(todos)} />
      <TodoCounter
        pendingCount={pendingCount}
        completedCount={completedCount}
      />
    </>
  )
}

export default observer(App)
