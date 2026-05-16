<template>
  <div>
    <p class="message">Task status has been changed</p>
    <RouterLink to="/" class="btn">Go to list</RouterLink>
  </div>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const todos = JSON.parse(localStorage.getItem('todos') || '[]')
const todo = todos.find(t => t.id === Number(route.params.id))
if (todo) {
  todo.done = !todo.done
  localStorage.setItem('todos', JSON.stringify(todos))
}
</script>

<style scoped>
.message {
  font-size: 20px;
  margin-bottom: 16px;
  color: #22c55e;
}

.btn {
  padding: 8px 16px;
  background: #4f46e5;
  color: white;
  border-radius: 4px;
  text-decoration: none;
}
</style>
