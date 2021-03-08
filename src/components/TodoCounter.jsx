import React from 'react'
import PropTypes from 'prop-types'

const TodoCounter = ({ pendingCount, completedCount }) => (
  <div className='todo-totals text-secondary'>
    {pendingCount} pending, {completedCount} completed
  </div>
)

TodoCounter.propTypes = {
  pendingCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
}

export default TodoCounter
