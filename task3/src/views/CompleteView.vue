<template>
  <div>
    <p class="message">Task status has been changed</p>
    <RouterLink to="/" class="btn">Go to list</RouterLink>
  </div>
</template>

<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { useTodosStore } from '../stores/todos'

const route = useRoute()
const todosStore = useTodosStore()

todosStore.toggleTodo(Number(route.params.id))
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
