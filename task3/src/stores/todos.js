import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTodosStore = defineStore('todos', () => {
  const todos = ref([])

  function loadFromStorage() {
    const stored = localStorage.getItem('todos')
    if (stored) {
      todos.value = JSON.parse(stored)
    }
  }

  function saveToStorage() {
    localStorage.setItem('todos', JSON.stringify(todos.value))
  }

  function addTodo(text) {
    const maxId = todos.value.length > 0 ? Math.max(...todos.value.map(t => t.id)) : 0
    todos.value.push({ id: maxId + 1, text, done: false })
    saveToStorage()
  }

  function deleteTodo(id) {
    todos.value = todos.value.filter(t => t.id !== id)
    saveToStorage()
  }

  function toggleTodo(id) {
    const todo = todos.value.find(t => t.id === id)
    if (todo) {
      todo.done = !todo.done
      saveToStorage()
    }
  }

  function getTodoById(id) {
    return todos.value.find(t => t.id === id)
  }

  return {
    todos,
    loadFromStorage,
    addTodo,
    deleteTodo,
    toggleTodo,
    getTodoById,
  }
})
