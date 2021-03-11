import { nanoid } from 'nanoid'

const todos = [
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
]

const fetchTodos = async () => {
  return await new Promise((resolve) => setTimeout(() => resolve(todos), 700))
}

export { fetchTodos }
