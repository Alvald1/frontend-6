<template>
  <div>
    <h1>Tasks</h1>
    <p v-if="todos.length === 0">No tasks yet. <RouterLink to="/add">Add one</RouterLink></p>
    <ul class="list">
      <li v-for="todo in todos" :key="todo.id" class="item">
        <RouterLink :to="`/task/${todo.id}`" class="item__link" :class="{ done: todo.done }">
          {{ todo.text }}
        </RouterLink>
        <div class="item__actions">
          <RouterLink :to="`/task/${todo.id}/complete`">Toggle</RouterLink>
          <RouterLink :to="`/task/${todo.id}/delete`">Delete</RouterLink>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { useTodosStore } from '../stores/todos'

const todosStore = useTodosStore()
const { todos } = todosStore

onMounted(() => {
  todosStore.loadFromStorage()
})
</script>

<style scoped>
h1 {
  margin-bottom: 16px;
}

.list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.item {
  background: white;
  padding: 12px 16px;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 1px 4px rgba(0,0,0,0.08);
}

.item__link {
  text-decoration: none;
  color: #333;
  font-size: 16px;
}

.item__link.done {
  text-decoration: line-through;
  color: #999;
}

.item__actions {
  display: flex;
  gap: 12px;
}

.item__actions a {
  color: #4f46e5;
  text-decoration: none;
  font-size: 14px;
}
</style>
