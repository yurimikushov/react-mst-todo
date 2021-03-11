import React from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '../store'

const TodoCounter = () => {
  const { pendingTodosCount, completedTodosCount } = useStore()

  return (
    <div className='todo-totals text-secondary'>
      {pendingTodosCount} pending, {completedTodosCount} completed
    </div>
  )
}

export default observer(TodoCounter)
