import React from 'react'
import { observer } from 'mobx-react-lite'
import { useStore } from '../store'

const TodoCounter = () => {
  const { isPending, pendingTodosCount, completedTodosCount } = useStore()

  if (isPending) {
    return null
  }

  return (
    <div className='todo-totals text-secondary'>
      {pendingTodosCount} pending, {completedTodosCount} completed
    </div>
  )
}

export default observer(TodoCounter)
