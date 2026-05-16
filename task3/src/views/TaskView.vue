<template>
  <div v-if="todo">
    <h1>Task #{{ todo.id }}</h1>
    <p class="text" :class="{ done: todo.done }">{{ todo.text }}</p>
    <p class="status">Status: {{ todo.done ? 'Done' : 'Pending' }}</p>
    <div class="actions">
      <RouterLink :to="`/task/${todo.id}/complete`" class="btn btn--toggle">Toggle Status</RouterLink>
      <RouterLink :to="`/task/${todo.id}/delete`" class="btn btn--delete">Delete</RouterLink>
      <RouterLink to="/" class="btn btn--back">Back to list</RouterLink>
    </div>
  </div>
  <div v-else>
    <p>Task not found. <RouterLink to="/">Go back</RouterLink></p>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useTodosStore } from '../stores/todos'

const route = useRoute()
const todosStore = useTodosStore()

const todo = computed(() => todosStore.getTodoById(Number(route.params.id)))
</script>

<style scoped>
h1 {
  margin-bottom: 12px;
}

.text {
  font-size: 18px;
  margin-bottom: 8px;
}

.text.done {
  text-decoration: line-through;
  color: #999;
}

.status {
  color: #555;
  margin-bottom: 16px;
}

.actions {
  display: flex;
  gap: 8px;
}

.btn {
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  font-size: 14px;
}

.btn--toggle {
  background: #4f46e5;
  color: white;
}

.btn--delete {
  background: #ef4444;
  color: white;
}

.btn--back {
  background: #e5e7eb;
  color: #333;
}
</style>
