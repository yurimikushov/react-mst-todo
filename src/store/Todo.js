import { types } from 'mobx-state-tree'

const Todo = types
  .model({
    id: types.string,
    title: types.optional(types.string, ''),
    done: types.optional(types.boolean, false),
  })
  .actions((self) => ({
    setTitle: (title) => {
      self.title = title
    },
    toggle: () => {
      self.done = !self.done
    },
  }))

export { Todo }
