<template>
  <div>
    <p class="message">Task deleted</p>
    <RouterLink to="/" class="btn">Go to list</RouterLink>
  </div>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router'

const route = useRoute()

const todos = JSON.parse(localStorage.getItem('todos') || '[]')
const filtered = todos.filter(t => t.id !== Number(route.params.id))
localStorage.setItem('todos', JSON.stringify(filtered))
</script>

<style scoped>
.message {
  font-size: 20px;
  margin-bottom: 16px;
  color: #ef4444;
}

.btn {
  padding: 8px 16px;
  background: #4f46e5;
  color: white;
  border-radius: 4px;
  text-decoration: none;
}
</style>
