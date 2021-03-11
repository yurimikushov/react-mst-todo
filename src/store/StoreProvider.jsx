import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import { RootStore } from './Root'

const store = RootStore.create()

const StoreContext = createContext()

const StoreProvider = ({ children }) => (
  <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
)

StoreProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.arrayOf(PropTypes.element).isRequired,
  ]),
}

const useStore = () => useContext(StoreContext)

export { StoreProvider, useStore }
