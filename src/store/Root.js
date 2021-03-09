import { types } from 'mobx-state-tree'
import { values } from 'mobx'
import { nanoid } from 'nanoid'
import { Todo } from './Todo'

const RootStore = types
  .model({
    todos: types.array(Todo),
  })
  .views((self) => ({
    get pendingCount() {
      return values(self.todos).filter((todo) => !todo.done).length
    },
    get completedCount() {
      return values(self.todos).filter((todo) => todo.done).length
    },
    getTodosWhereDoneIs(done) {
      return values(self.todos).filter((todo) => todo.done === done)
    },
  }))
  .actions((self) => {
    const addTodo = (name = '') => {
      self.todos.push(Todo.create({ name }))
    }

    return { addTodo }
  })

export { RootStore }
