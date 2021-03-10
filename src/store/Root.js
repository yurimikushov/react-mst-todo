import { types } from 'mobx-state-tree'
import { nanoid } from 'nanoid'
import { Todo } from './Todo'

const RootStore = types
  .model({
    todos: types.array(Todo),
  })
  .views((self) => ({
    get pendingTodosCount() {
      return self.todos.filter((todo) => !todo.done).length
    },
    get completedTodosCount() {
      return self.todos.filter((todo) => todo.done).length
    },
  }))
  .actions((self) => ({
    addTodo: (title) => {
      self.todos.push(Todo.create({ id: nanoid(), title }))
    },
    deleteTodo: (todoId) => {
      self.todos = self.todos.filter((todo) => todo.id !== todoId)
    },
  }))

export { RootStore }
