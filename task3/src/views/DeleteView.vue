<template>
  <div>
    <p class="message">Task deleted</p>
    <RouterLink to="/" class="btn">Go to list</RouterLink>
  </div>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { useTodosStore } from '../stores/todos'

const route = useRoute()
const todosStore = useTodosStore()

todosStore.deleteTodo(Number(route.params.id))
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
