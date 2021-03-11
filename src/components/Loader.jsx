import React from 'react'
import PropTypes from 'prop-types'

const Loader = ({ className = '', ...props }) => (
  <div className={'loader' + (className ? ' ' + className : '')} {...props}>
    <div className='loader__spinner spinner-border'>
      <span className='sr-only'>Loading...</span>
    </div>
  </div>
)

Loader.propTypes = {
  className: PropTypes.string,
}

export default Loader
