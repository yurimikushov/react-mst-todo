import React from 'react'
import PropTypes from 'prop-types'

const TodoCounter = ({ pendingCount, completedCount }) => (
  <div className='todo-totals'>
    {pendingCount} pending, {completedCount} completed
  </div>
)

TodoCounter.propTypes = {
  pendingCount: PropTypes.number.isRequired,
  completedCount: PropTypes.number.isRequired,
}

export default TodoCounter
