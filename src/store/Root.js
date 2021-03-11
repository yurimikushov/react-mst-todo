import { types } from 'mobx-state-tree'
import { fetchTodos } from '../api'
import { nanoid } from 'nanoid'
import { Todo } from './Todo'

const RootStore = types
  .model({
    todos: types.array(Todo),
    isPending: types.optional(types.boolean, false),
    error: types.optional(types.string, ''),
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
    fetchTodos: async () => {
      self.setIsPending(true)

      try {
        self.fetchTodosSuccess(await fetchTodos())
      } catch (err) {
        self.fetchTodosError(err)
      }

      self.setIsPending(false)
    },
    fetchTodosSuccess: (todos) => {
      self.todos = todos
    },
    fetchTodosError: (error) => {
      self.error = error
    },
    setIsPending: (isPending) => {
      self.isPending = isPending
    },
    addTodo: (title) => {
      self.todos.push(Todo.create({ id: nanoid(), title }))
    },
    deleteTodo: (todoId) => {
      self.todos = self.todos.filter((todo) => todo.id !== todoId)
    },
  }))

export { RootStore }
