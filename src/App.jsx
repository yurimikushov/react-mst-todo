import React, { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from './store'
import AddTodoForm from './components/AddTodoForm'
import TodoItems from './components/TodoItems'
import TodoCounter from './components/TodoCounter'

const App = () => {
  const { fetchTodos } = useStore()

  useEffect(() => {
    fetchTodos()
  }, [fetchTodos])

  return (
    <div className='container my-3'>
      <AddTodoForm />
      <TodoItems />
      <TodoCounter />
    </div>
  )
}

export default observer(App)
