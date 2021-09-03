import { Todo } from './todo'

export function saveTodos(todos: Todo[]) {
  localStorage.setItem('todoList', JSON.stringify(todos))
}

export function readTodos(): Todo[] {
  return JSON.parse(localStorage.getItem('todoList') || '[]')
}
