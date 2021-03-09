import React, { createContext, useContext } from 'react'
import PropTypes from 'prop-types'
import { nanoid } from 'nanoid'
import { RootStore } from './Root'

const store = RootStore.create({
  todos: [
    {
      id: nanoid(),
      title: 'Buy a milk',
      done: false,
    },
    {
      id: nanoid(),
      title: 'Check email',
      done: false,
    },
    {
      id: nanoid(),
      title: 'Call John',
      done: true,
    },
    {
      id: nanoid(),
      title: 'Eat a cake',
      done: false,
    },
  ],
})

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
