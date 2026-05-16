<template>
  <nav class="nav">
    <RouterLink to="/">Tasks</RouterLink>
    <RouterLink to="/add">Add Task</RouterLink>
    <RouterLink to="/about">About</RouterLink>
  </nav>
  <main class="main">
    <RouterView />
  </main>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: sans-serif;
  background: #f5f5f5;
}

.nav {
  background: #4f46e5;
  padding: 12px 24px;
  display: flex;
  gap: 16px;
}

.nav a {
  color: white;
  text-decoration: none;
  font-weight: 600;
}

.nav a:hover {
  text-decoration: underline;
}

.main {
  max-width: 700px;
  margin: 32px auto;
  padding: 0 16px;
}
</style>
