<template>
  <div>
    <h1>Add Task</h1>
    <form @submit.prevent="addTodo" class="form">
      <input v-model="text" type="text" placeholder="Task text" class="input" />
      <button type="submit" :disabled="!text.trim()" class="btn">Add</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const text = ref('')
const router = useRouter()

function addTodo() {
  if (!text.value.trim()) return
  const todos = JSON.parse(localStorage.getItem('todos') || '[]')
  const maxId = todos.length > 0 ? Math.max(...todos.map(t => t.id)) : 0
  todos.push({ id: maxId + 1, text: text.value.trim(), done: false })
  localStorage.setItem('todos', JSON.stringify(todos))
  router.push('/')
}
</script>

<style scoped>
h1 {
  margin-bottom: 16px;
}

.form {
  display: flex;
  gap: 8px;
}

.input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.btn {
  padding: 8px 16px;
  background: #4f46e5;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}
</style>
