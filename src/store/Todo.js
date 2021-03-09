import { types } from 'mobx-state-tree'
import { nanoid } from 'nanoid'

const Todo = types
  .model({
    id: types.optional(types.string, nanoid()),
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
