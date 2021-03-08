import { types } from 'mobx-state-tree'

const Todo = types
  .model({
    name: types.optional(types.string, ''),
    done: types.optional(types.boolean, false),
  })
  .actions((self) => {
    const setName = (newName) => {
      self.name = newName
    }

    const toggle = () => {
      self.done = !self.done
    }

    return {
      setName,
      toggle,
    }
  })

export { Todo }
