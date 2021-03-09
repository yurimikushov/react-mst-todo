import { types } from 'mobx-state-tree'
import { values } from 'mobx'
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
  }))
  .actions((self) => {
    const addTodo = (name = '') => {
      self.todos.push(Todo.create({ name }))
    }

    const deleteTodo = (todoId) => {
      self.todos = self.todos.filter((todo) => todo.id !== todoId)
    }

    return {
      addTodo,
      deleteTodo,
    }
  })

export { RootStore }
